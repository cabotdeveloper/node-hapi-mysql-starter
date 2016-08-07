'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const events = require('events');
const Path = require('path');
var Glue = require('glue');
var Config = require('./config/config');
require('console-stamp')(console, { pattern : "dd/m/yyyy HH:MM:ss.l" } );  

console.log('TEST')

const dispatcher = new events.EventEmitter();

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

    plugins:{
        '../lib': [{ select: 'cabot-chat-app' }]
    }
};

module.exports = manifest;

if (!module.parent) {
    Glue.compose(manifest, { relativeTo: Path.join(__dirname, 'node_modules') }, function (err, server) {

        if (err) {
            throw err;
        }

        server.start(function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(Config.product.name+ ' started on ' + Config.server.service.uri);
        });
    });
}


/*

const server = new Hapi.Server({
    connections: {
        routes: {
            cors: true,
            files: {
                relativeTo: path.join(__dirname, './client')
            }
        }
    }
});

server.connection({ port: 84 });
server.register(Inert, () => {});

server.route({
    method: 'POST',
    path: '/send',
    handler: (req, res) => {
        dispatcher.emit('message', req.payload);
        res('ok').type('text/plain');
    }
});

server.route({
    method: 'GET',
    path: '/subscribe',
    handler: (req, res) => {
        dispatcher.once('message', message => {
            res(message)
                .type('text/plain')
                .header('Cache-Control', 'no-cache, must-revalidate');
        });
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start();
*/