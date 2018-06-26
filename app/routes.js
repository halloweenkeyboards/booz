//var Todo = require('./models/todo');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('0a2ab078986716b294080e753cbb3c36');





module.exports = function(app) {



  app.get('/api/beers:searchQuery', function(req,res) {

    brewdb.search.beers({q:req.params.searchQuery, withBreweries: "Y"}, function(err,data) {
      if (err) throw err;
      res.json(data);
    });

  });

	// application -------------------------------------------------------------


        app.get('/info', function(req,res) {
          res.sendfile('./public/credits.html');

        });

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


};
