var data = require('../classes.json');

exports.view = function(req, res){
	res.render('classes', data);
};
