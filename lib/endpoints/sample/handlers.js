'use strict';

/**
 * Sample output
 */
exports.get = function(request, reply) {
    reply([
        {id: 1, name: 'sample one'},
        {id: 2, name: 'sample two'}
    ])
}
