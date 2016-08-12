'use strict';

var User = require('./../../models/user');

/**
 * 
 */

module.exports = {
	getAll: function (request, reply) {
		User.getAll(request, reply, function (data) {
			reply(data);
		});
	},

	getOne: function (request, reply) {
		User.getOne(request, reply, function (data) {
			reply(data);
		});
	},
	
	insertOne: function (request, reply) {
		User.insertOne(request, reply, function (data) {
			reply(data);
		});
	},

	updateOne: function (request, reply) {	
		User.updateOne(request, reply, function (data) {
			reply(data);
		});
	}
}
/*exports.get = function(request, reply) {
    */
	

	/**/
/*}*/
