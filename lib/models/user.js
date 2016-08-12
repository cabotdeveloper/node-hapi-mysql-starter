'use strict';

const Lodash = require('lodash');
const Joi = require('joi');
const Validation = require('../validation/validation');
var DbHandle = require('../../config/connectionHandler').MySqlConnection();

var tableName = 'users';

module.exports = {
    getAll: function(request, reply, callback) {
        var query = 'SELECT * FROM '+tableName;
        DbHandle.query(query, function(error, rows, fields) {
            if (error) {
                callback( {'error':'Some error'} );
                return;
            }
            callback(rows);
        }); 
    }, 
    getOne: function(request, reply, callback) {
        var query = 'SELECT * FROM '+tableName;
        DbHandle.query(query, function(error, rows, fields) {
            if (error) {
                callback( {'error':'Some error'} );
                return;
            }
            callback(rows);
        }); 
    }
}

