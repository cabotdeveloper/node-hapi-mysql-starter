'use strict';

var Path = require('path');
var Joi = require('joi');
var Config = require('../config/config');
var Package = require('../package.json');

exports.register = function(server, options, next) {
    console.log("NONE");
    server.register([
        {
            // Tag routes with "api" for use with swagger.
            register: require('hapi-swagger'),
            options: {
                basePath: Config.server.service.uri,
                apiVersion: 1,
                enableDocumentationPage: false
            }
        },
        {
            register: require('inert')
        },
        {
            register: require('vision')
        },
        {
            register: require('good'),
            options: {
                reporters: [{
                    reporter: require('good-file'),
                    events: {
                        response: '*',
                        log: '*'
                    },
                    config: {
                        path: 'log',
                        rotate: 'daily'
                    }
                }]
            }

        }
    ],
        function(err) {

            if (err) {
                return next(err);
            }

            // Pinger
            server.route({
                method: 'GET',
                path: '/',
                handler: function(request, reply) {
                    reply({ name: Package.description, version: Package.version });
                }
            });

            // Swagger docs
            server.route({
                method: 'GET',
                path: '/swagger',
                handler: { file: Path.normalize(__dirname + '/swagger.html') }
            });

            /**
             * API Routes
             */

            server.route(require('./endpoints/sample'));

            next();
        });

};

exports.register.attributes = {
    pkg: Package
};
