const Path = require('path');

module.exports = {

    product: {
        name: 'cabot-chat-app'
    },

    server: {
        service: {
            host: '0.0.0.0',
            port: process.env.PORT || 3000
        },
    }

};
