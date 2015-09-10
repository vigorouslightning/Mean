var path = require('path');

exports.index = function (reg, res) {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
};

