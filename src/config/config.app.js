'use strict'

const dotenv = require('dotenv');
dotenv.config('../../.env');

const dev = {
    app: {
        port: process.env.PORT,
        url: process.env.DEV_APP_URL
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DEV_DB_NAME
    },
    environment: 'dev'
}

const prod = {
    app: {
        port: process.env.PORT,
        url: process.env.PROD_APP_URL
    },
    db: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        name: process.env.PROD_DB_NAME
    },
    environment: 'prod'
}

const env = process.env.NODE_ENV || 'dev';

const config = {
    dev, 
    prod
};

module.exports = config[env];

