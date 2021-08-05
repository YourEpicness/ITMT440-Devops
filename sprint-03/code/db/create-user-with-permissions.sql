-- This file creates a user named worker and passes in the password declared in the environment variables
-- Depending on the user, you may not want CREATE and DELETE permissions

-- GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,CREATE TEMPORARY TABLES,DROP,INDEX,ALTER ON posts.* TO worker@'$ACCESSFROMIP' IDENTIFIED BY '$USERPASS'; flush privileges;
CREATE USER 'Othniel'@'localhost' IDENTIFIED BY 'admin';
CREATE USER 'Lucas'@'localhost' IDENTIFIED BY 'admin';
CREATE USER 'Julaam'@'localhost' IDENTIFIED BY 'admin';
CREATE USER 'Yunhan'@'localhost' IDENTIFIED BY 'admin';



-- ALL PRIVILEGES- as we saw previously, this would allow a MySQL user full access to a designated database (or if no database is selected, global access across the system)
--CREATE- allows them to create new tables or databases
--DROP- allows them to them to delete tables or databases
--DELETE- allows them to delete rows from tables
--INSERT- allows them to insert rows into tables
--SELECT- allows them to use the SELECT command to read through databases
--UPDATE- allow them to update table rows
--GRANT OPTION- allows them to grant or remove other users’ privileges
--GRANT SELECT,INSERT,UPDATE, DELETE, INDEX, ALTER,  DROP, LOCK TABLES, CREATE ON $DATABASENAME.* TO worker@'$ACCESSFROMIP' IDENTIFIED BY '$USERPASS';
--flush privileges;

GRANT ALL PRIVILEGES ON * . *.table_name TO 'Othniel'@'localhost';
GRANT ALL PRIVILEGES ON * . *.table_name TO 'Lucas'@'localhost';
GRANT ALL PRIVILEGES ON * . *.table_name TO 'Julaam'@'localhost';
GRANT ALL PRIVILEGES ON * . *.table_name TO 'Yunhan'@'localhost';
