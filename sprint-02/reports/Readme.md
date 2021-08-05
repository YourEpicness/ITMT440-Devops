# Sprint-02 Report

## Team Number 03 Tuesday

## Team Members and Roles

* Othniel Olorundara, Project Manager
* Yunhan Zhang, Head Developer
* Julaam Jeebe Diop, UI/UX Developer and Security
* Lucas Brancato, IT Operations

## UI/UX Report

User Task Scenario: You have just created an account for the item swapping site. Login with user or root credentials.
User Testing Objectives:
Can the user successfully login?
Can an admin successfully login?
Is the user redirected to the landing page on successful login?
Is the admin redirected to the landing page on successful login?
Testing Method:
Unmoderated remote User Testing
Usability Testing Results:
When first visiting the login page, the goal is to try to login. Since it is my first time on the site, my first response is to try to create a new username and password. I attempt to click the “Trouble Sign In” button to figure out how to create a new user/pass, but this link does not work. When clicking the login button with no input, there is no prompt that indicates that you have an invalid user/pass. When entering in a username, there is no prompt that it must be an email format until you press login. When logging in with a false user/pass, there are no prompts and login seems to work. Later, when given a pre-set user/pass login is successful.


## Developer Report

Make a pre-designed login page for our item swapping site.
Element used in this work: Javascript and CSS.
Due to limited time I have this time, the login page is finished just on time. I will definitely improve my time management in the upcoming weeks.
I uploaded the code onto my Github Repo and here are the links for both repo and live link

Github Repo: https://github.com/yunhanzhang980116/ITMD-361/tree/main/ItemSwappingSite
Live link:
https://yunhanzhang980116.github.io/ITMD-361/ItemSwappingSite/


## IT Infrastructure Report

Operating system and platform:
Used Vagrant on the terminal to connect (ssh) to a virtual box running Ubuntu OS.
Database:
Script stored on a file named “code” on repository, with a readme.md file.
The folder also contains automated provisions.
Database created and populated using Sprint-1 ERD as a baseline.
Not all of these steps were automated.


## Developer and Security Assumptions

Database privileges
The only privileges a non-root user should have are SELECT, INSERT, UPDATE, CREATE TEMPORARY TABLES, and DELETE, .
These are necessary because users will be doing things such as posting comments, editing and uploading a post, uploading media files, therefore only data read and write privileges are needed.
Root users should be granted all privileges to be able to make necessary changes to the database.

#!/bin/bash
echo "==== Setting up firewall rules for vagrant $1 ===="
vagrant ssh $1 \
'echo "y" | sudo ufw --force enable \
&& sudo ufw default deny incoming \
&& sudo ufw default deny outgoing
&& sudo ufw allow 80/tcp \
&& sudo ufw allow 443/tcp \
&& sudo ufw allow 22/tcp \
&& sudo vagrant reload'

Created a bash script that automatically sets up firewall settings using UFW in Ubuntu.
This script denies access to all ports except 22, 443, and 80.
Port 22 is ssh and used for secure file transfer and to allow access with vagrant.
Port 80 is for http and it is left open to redirect traffic from http to https which is the encrypted port.
Port 443 is for https and is left open to encrypt any traffic going into the site.


## User/Admin/Anonymous Story Goes here

This is text interspersed with mockups/screenshots (tell us a story and follow the flow of the application)

## Project Manager Report

Display the tasks and deadlines the Project Manager created and then display and discuss the actual completed percentages of tasks and describe the reasons for this percentage if necessary
