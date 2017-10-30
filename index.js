var express = require('express'); //assigning a vairable express to the module express. Require will load the code from the module express.
var config = require('./config/config');//assigning a variable config to the module in the config folder called config.

var app = express();//app object implements the server in express

require('./config/express')(app, config);//loads server configuration code and passes the app and config object to it

console.log('info',"Creating HTTP server on port: %s", config.port);//Prints to the console which port the server is running on
require('http').createServer(app).listen(config.port, function () {//turns on the server at port number
    console.log("HTTP Server listening on port:" + " " +  config.port + " "+ app.get('env')+ "localhost:" + config.port);
});//Prints to the console what port it is listening in on 

module.exports = app;//exports to express or the app object