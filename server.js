'use strict';

const Path = require('path');
var Glue = require('glue');
var Config = require('./config/appConfig');
require('console-stamp')(console, { pattern : "dd/m/yyyy HH:MM:ss" } );  

Config.server.service.uri = 
    (Config.server.service.tls ? 'https://' : 'http://') +
    Config.server.service.host + ':' +
    Config.server.service.port;

var manifest = {

    server: {
        app: {
            config: Config
        }
    },
    
    connections: [
        {
            host: Config.server.service.host,
            port: Config.server.service.port,
            labels: Config.product.name,
            routes: {
                cors: true,
                validate: {
                    options: {
                        abortEarly: false
                    }
                }
            }
        }
    ],

    plugins: {
        
        '../lib': [{ select: 'node-hapi-mysql' }]
    }
};

module.exports = manifest;

if (!module.parent) {
    Glue.compose(manifest, { relativeTo: Path.join(__dirname, 'node_modules') }, function (err, server) {

        if ( err ) {
            console.error( err );
        }

        server.start(function () {
            
            if ( err ) {
                console.error( err ); 
            }
            console.log(Config.product.name+ ' started on ' + Config.server.service.uri);
        });
    });
}