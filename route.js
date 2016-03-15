var route = function(app) {
	app.get('/' ,function(req,res) {
		res.send("Hello get");
	});

	app.get('/time', function(req, res) {
		var date = new Date();
		res.send(date.toTimeString());
	});

	app.get('/name/:name' ,function(req,res) {
		res.send("Hello" + req.params.name);
	});

	app.post('/' ,function(req,res) {
		res.send("Hello post");
	});

	app.post('/name' ,function(req,res) {
		res.send("Hello" + req.body.name + "\nyour age is :"+ req.body.age);
	});



}

module.exports = route;