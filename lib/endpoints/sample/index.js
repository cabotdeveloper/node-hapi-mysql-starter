'use strict';

const Joi = require('joi');

const Validation = require('../../validation/validation');
const SampleHandlers = require('./handlers');

module.exports = [

    {
        method: 'GET',
        path: '/sample',
        handler: SampleHandlers.get,
        config: {
            tags: ['api'],  // any endpoint tagged as API will show up in swagger docs
            description: "Description for swagger docs",
            notes: "Notes for swagger docs",
            validate: {
                query: Validation.globalQueryParams     // validate typical global params
            }
        }
    },

];
