require.extensions['.sql'] = function(module, filename) {
    module.exports = require('fs').readFileSync(filename, 'utf8');
};