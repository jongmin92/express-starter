# express-starter
This project is for express starter.
Except for the basic express module, only the [mysql](https://github.com/mysqljs/mysql) and [sequlize](https://github.com/sequelize/sequelize) modules are installed.
Other RDS can be used if you want.

## Getting Started

###

### Prerequisites
express-starter is based on Node Express Framework
node v6.6.0 (using ES6)

### Install tools
- nodejs(or nvm) & npm

### Getting start
```bash
cd ~/workspace/express-starter
npm install
cp config/config_template.json config/config.json
vi config/config.json  (you should fill it)
(1) export NODE_ENV=development (Dev Mode)
(2) export NODE_ENV=production  (Prod Mode)
(3) export NODE_ENV=test        (Test/Local Mode)
npm start
```

### Smaple code
app/controllers/userController.js
models/user.js

### Migration
```bash
./make_migration_file.sh         <- create a migration file
./migrate.sh                     <- migrate
```
See here for [details](http://docs.sequelizejs.com/en/v3/docs/migrations/)

## Structure
```bash
├── collar-back/
  ├── app/
    ├── config/                  <- server config file here
    ├── controllers/             <- controller folder
    ├── migrations/              <- migration(DB) folder
    ├── models/                  <- model(DB) folder
      ├── index.js               <- sequelize setting & model import
    ├── make_migration_file.sh   <- make migration file
    ├── migrate.sh               <- do migrate
  ├── bin/                        
    ├── www                      <- server entry file
  ├── node_modules               <- modules
  ├── public/
  ├── routes/
    ├── api.js                   <- App api file
  ├── app.js                     <- express setting file
  ├── package.json               <- mostly task runner dependencies
```
