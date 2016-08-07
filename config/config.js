const Path = require('path');

module.exports = {

    product: {
        name: 'cabot-chat-app'
    },

    server: {
        service: {
            host: 'localhost',
            port: process.env.PORT || 8080,
            tls: false
        },
    }

};
