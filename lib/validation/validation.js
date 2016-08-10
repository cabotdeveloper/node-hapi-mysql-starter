'use strict';

/**
 * Container for reusable Joi validations.
 * Most useful for sharing validation between route handlers.
 * 
 * NOTE: Model specific validations should be placed in their respective model files.
 */

const Joi = require('joi');


exports.YearValidator = Joi.number().integer().min(2000).max(9999);

exports.DateValidator = Joi.date();

exports.CodeValidator = Joi.string().max(32);

exports.UrlValidator = Joi.string().uri().max(255);

exports.PhoneValidator = Joi.string().max(20);

exports.PostalCodeValidator = Joi.string().max(11);

exports.StringValidator = Joi.string().max(255);

/**
 * Validates a basic primary auto-increment key.
 */
exports.primaryKey = Joi.number().integer().positive();

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