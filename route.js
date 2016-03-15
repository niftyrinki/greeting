var route = function(app) {
	app.get('/' ,function(req,res) {
		res.send("Hello");
	});

	app.get('/time', function(req, res) {
		var date = new Date();
		res.send(date.toTimeString());
	});

	app.get('/name/:name' ,function(req,res) {
		res.send("Hello" + req.params.name);
	});
}

module.exports = route;