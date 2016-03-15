var route = function(app) {
	app.get('/' ,function(req,res) {
		res.send("hello word");
	})
}

module.exports = route;