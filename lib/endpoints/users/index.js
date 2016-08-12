'use strict';

const Joi = require('joi');

const Validation = require('../../validation/validation');
const UserHandlers = require('./handlers');

module.exports = [

    {
        method: 'GET',
        path: '/users',
        handler: UserHandlers.getAll,
        config: {
            tags: ['api'],  // any endpoint tagged as API will show up in swagger docs
            description: "Get all users",
            notes: "LIST_USERS",
        }
    }, 

    {
        method: 'GET',
        path: '/user/{user_id}',
        handler: UserHandlers.getOne,
        config: {
            tags: ['api'],  // any endpoint tagged as API will show up in swagger docs
            description: "Get user information from user_id",
            notes: "GET_USER",
            validate: {
                params: {
                    user_id: Validation.positiveInteger 
                }   
            }
        }
    }
    
];
