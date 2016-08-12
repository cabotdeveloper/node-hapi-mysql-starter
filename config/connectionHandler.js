var MySql = require('mysql');
var DbConnection = require('./dbConfig');

module.exports = {
	MySqlConnection: function() {
		var MySqlConnection = MySql.createConnection(
			DbConnection.mysql_test.options
		);

		MySqlConnection.connect(function(err) {
			if (err) {
				console.error('Error connecting: ' + err.stack);
				return;
			}
			console.log('Connected as id ' + MySqlConnection.threadId);
		});
		
		return MySqlConnection;
	}

	
}
