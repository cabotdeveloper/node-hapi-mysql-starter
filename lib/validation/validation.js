'use strict';

/**
 * Container for reusable Joi validations.
 * Most useful for sharing validation between route handlers.
 * 
 * NOTE: Model specific validations should be placed in their respective model files.
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