'use strict';

const Joi = require('joi');
const Validation = require('../validation/validation');
var DbHandle = require('../../config/connectionHandler').MySqlConnection();

var tableName = 'users';

/**
 * DB Operations against
 */

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
        var query = 'SELECT * FROM '+tableName+' WHERE user_id='+request.params.user_id;
        console.log(query);
        DbHandle.query(query, function(error, rows, fields) {
            if (error) {
                callback( {'error':'Some error'} );
                return;
            }
            callback(rows);
        }); 
    }
}

