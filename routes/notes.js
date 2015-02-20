exports.view = function(req, res){
	var display = req.params.display;

	res.render('notes', {
		'display': display
	});
}
