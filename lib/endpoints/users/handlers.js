'use strict';

var User = require('./../../models/user');

/**
 * DB handlers for users
 */

module.exports = {
	
	getAll: function (request, reply) {
		User.getAll(request, reply, function (data) {
			reply({response: data});
		});
	},

	getOne: function (request, reply) {
		User.getOne(request, reply, function (data) {
			reply({response: data});
		});
	},
}

