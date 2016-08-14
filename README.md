# Cabot Knowledge-base: NodeJS + HAPI + MySQL project #

A basic starter repo that can be cloned and used for new API services.

### About the project
* Basic structuring of a REST based project
* Usage of Hapi framework
* REST documentation using Swagger
* Usage of core MySQL module in Hapi (We should start using other ORM modules)
* Route validations using Joi
* Usage of Glue to unify the manifest
* Logger using good-file module

### Installation & set-up
* Clone the repo
* Create a MySQL database 'node_hapi_mysql'
* Execute the one-off-script present in sql_dump folder to your SQL
* Change the DB credentials inside the file ./config/dbConfig.js
* Set-up NodeJS environment - <https://docs.google.com/document/d/1UJNjtxz5FOoZb4wfCFtkTzllUmYuNfLSyIg6ASNFbW4/edit>
* Install forever globally in your machine `npm install -g forever`
* From terminal run `npm install` - This will install dependant modules for the project
* Start your application `npm start`
* Navigate to <http://localhost:3000/swagger>
* Stop your application `npm stop`

### IMPORTANT
* If you want to do some changes to the project, create a new branch and raise a merge request against master.
