'use strict';

const Path = require('path');

/** 
 * This file holds the basic configuration values of the application.
 * This includes - host, port, db credentials, tokens etc
 * Ideally this file should not be pushed to GIT
 * If we push it make sure that values does not have sensitive data (production credentials)
 */

module.exports = {

    product: {
        name: 'node-hapi-mysql'
    },

    server: {
        service: {
            host: 'localhost',
            port: process.env.PORT || 3000,
            tls: false
        }
    }

};
