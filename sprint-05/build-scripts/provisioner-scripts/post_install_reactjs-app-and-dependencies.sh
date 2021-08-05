#!/bin/bash
set -e
set -v

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
# pm2 is the way to start nodejs applications at boot
sudo npm install pm2@latest -g
# To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u vagrant --hp /home/vagrant

# Change the ownership of your cloned repo -- CHANGE THIS FROM 2021-team-sample to your private repo
sudo chown -R vagrant:vagrant ~/2021-team03t


# Install needed dependency
sudo npm install -g react react-scripts bootstrap concurrently express firebase material-ui react-bootstrap react-dom redux sass react-redux react-router react-router-dom redux-logger redux-thunk

sudo chown -R vagrant:vagrant /home/vagrant/.pm2
# fix permissions
sudo chown -R vagrant:vagrant /home/vagrant/.npm

cd /home/vagrant/2021-team03t/sprint-05/code/item-swapping-site

# Get project dependencies (npm packages)
sudo npm install --force

# Deploy application to build
sudo npm run build
# This will cause the app to autostart on subsequent reboots and launch the app on 192.168.33.33:3000
sudo pm2 start --name reactjs-project npm -- start --host 192.168.33.33
sudo pm2 save
sudo chown -R vagrant:vagrant /home/vagrant/.pm2

# fix permissions
sudo chown -R vagrant:vagrant /home/vagrant/.npm
sudo chown -R vagrant:vagrant /home/vagrant/2021-team03t/sprint-05/code/item-swapping-site/node_modules
