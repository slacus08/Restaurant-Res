var bodyParser = require('body-parser')
var express = require('express')

var app = express()
var PORT = process.env.PORT || 8080;
//Variable - will take whatever port is defined by the deployment site
//(heroku) OR 8080, which means it can still work on local host

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

require('./app/routing/html-routes.js')(app);
/*can you include html routes
in this server file and the app
we are passing into that specific function, we want to use express-*/

//add console.log so we know when it is running
app.listen(PORT, function() {
  console.log("App listening to Port: " + PORT);
});
