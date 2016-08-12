'use strict';

/**
 * Valiations which can be used for route params/payload
 */

const Joi = require('joi');

/**
 * Validates a string of size 255
 */

exports.StringValidator = Joi.string().max(255);

/**
 * Validates a positive integer
 */

exports.positiveInteger = Joi.number().integer().positive();

/**
 * Validates the globaly available query string params available to
 * all GET endpoints in the API. 
 */

exports.globalQueryParams = Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    filter: Joi.any(),
    sort: Joi.string(),
    fields: Joi.any()
});