# Installation Instruction

Place all instruction needed to build your entire application here

From the build-scripts directory:

  * Make a copy of the file: `variables-sample.json` and rename it to `variables.json`
  * Modify the values in `variables.json`
  * Modify so that one webserver-one-ip is "192.168.33.33" and database-one-ip is "192.168.33.34" and ubuntu-firewall-access-range is "192.168.33.0/24"
  * Navigate to ~/build-scripts/ using cd in command-line/powershell
  * Run the command below

`packer build --var-file ./variables.json ./ubuntu18045-sample-server.json`

  * Once both are successfully built, you should see two .box files. Create one folder named frontend and one folder named backend in the /build/ directory.
  * Drag the .box files in their respective folder and cd in to one of the folders on powershell/command line
  * Run the command below but replace ./sample-server* with the name of the .box created and rename second sample-server to respective server type (frontend or backend)

  `vagrant box add ./sample-server*.box --name sample-server`

  * Drag and drop the respective Vagrantfile from /build-scripts/vagrantfile/(frontend or backend) in to the respective folder in your /build/

  * Run the command below to start your virtual machine

  `vagrant up`

  * Run the command below to ssh in to your virtual machine

  `vagrant ssh`
