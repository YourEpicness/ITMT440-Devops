#!/bin/bash
set -e
set -v

# http://superuser.com/questions/196848/how-do-i-create-an-administrator-user-on-ubuntu
# http://unix.stackexchange.com/questions/1416/redirecting-stdout-to-a-file-you-dont-have-write-permission-on
# This line assumes the user you created in the preseed directory is vagrant
echo "%admin  ALL=NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/init-users
sudo usermod -a -G admin vagrant

# Installing vagrant keys
wget --no-check-certificate 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub'
#sudo mkdir -p /home/vagrant/.ssh
sudo chown -R vagrant:vagrant /home/vagrant/.ssh
cat ./vagrant.pub >> /home/vagrant/.ssh/authorized_keys
sudo chown -R vagrant:vagrant /home/vagrant/.ssh/authorized_keys
echo "All Done!"

#http://www.fail2ban.org/wiki/index.php/MANUAL_0_8#Jails
sudo apt-get update
sudo apt-get install -y fail2ban
sudo sed -i "s/bantime  = 600/bantime = -1/g" /etc/fail2ban/jail.conf
sudo systemctl enable fail2ban
sudo service fail2ban restart

##################################################
# Add User customizations below here
##################################################

# Enable Firewall
# https://serverfault.com/questions/809643/how-do-i-use-ufw-to-open-ports-on-ipv4-only
# DBIP is configured in the packer environment variables to allow access from a variable IP
# https://serverfault.com/questions/790143/ufw-enable-requires-y-prompt-how-to-automate-with-bash-script
ufw --force enable
ufw allow proto tcp to 0.0.0.0/0 port 22
ufw allow from $FIREWALLACCESS to any port 3306
ufw allow 27017

# set the /etc/hosts file to match hostname
echo "192.168.33.33       item-site-server-frontend     item-site-server-frontend.example"    | sudo tee -a /etc/hosts
echo "192.168.33.34       item-site-server-db     item-site-server-db.example"    | sudo tee -a /etc/hosts

# Set hostname
sudo hostnamectl set-hostname db


# Install mariadb
export DEBIAN_FRONTEND=noninteractive
echo "mariadb-server mysql-server/root_password password $DBPASS" | sudo  debconf-set-selections
echo "mariadb-server mysql-server/root_password_again password $DBPASS" | sudo debconf-set-selections

sudo apt-get update
sudo apt-get install -y mariadb-server

# Inject the username and password for autologin later in a ~/.my.cnf file
# http://serverfault.com/questions/103412/how-to-change-my-mysql-root-password-back-to-empty/103423#103423
# https://stackoverflow.com/questions/8020297/mysql-my-cnf-file-found-option-without-preceding-group

echo -e "[mysqld]" > /root/.my.cnf
echo -e "\n\n[client]\nuser = root\npassword = $DBPASS" >> /root/.my.cnf
echo -e "\nport = 3306\nsocket = /var/run/mysqld/mysqld.sock\n" >> /root/.my.cnf

echo -e "[mysqld]" > /home/vagrant/.my.cnf.user
echo -e "\n\n[client]\nuser = worker\npassword = $USERPASS" >> /home/vagrant/.my.cnf.user
echo -e "\nport = 3306\nsocket = /var/run/mysqld/mysqld.sock\n" >> /home/vagrant/.my.cnf.user
echo -e "\ndefault-character-set = utf8mb4\n" >> /home/vagrant/.my.cnf.user


# Run SQL command
sed -i "s/\$ACCESSFROMIP/$ACCESSFROMIP/g" ~/2021-team03t/sprint-05/code/db/create-user-with-permissions.sql
sed -i "s/\$USERPASS/$USERPASS/g" ~/2021-team03t/sprint-05/code/db/create-user-with-permissions.sql

# This script will create the database named posts in the mariadb server
sudo mysql -u root < ~/2021-team03t/sprint-02/code/db-samples/create-database.sql
# This script will create the table named comments
sudo mysql -u root < ~/2021-team03t/sprint-02/code/db-samples/create-table.sql

# This script will insert 3 sample records to the table
sudo mysql -u root < ~/2021-team03t/sprint-02/code/db-samples/insert-records.sql

# This script will create the non-root user named worker and grant permission for it
sudo mysql -u root < ~/2021-team03t/sprint-05/code/db/create-user-with-permissions.sql
