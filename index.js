// Root path
global.APP_ROOT_PATH = __dirname + '/api/';

// Set other app paths
require('./config/global-paths');

// Set config and logger variables
global.config = require('./config');
global.logger = require('./config/debug');

// Create an Express App
const express = require('express');
const app = express();

// Include dependencies
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require(APP_ROUTE_PATH);
const ValidationManager = require(APP_MANAGER_PATH + 'validation');
const authManager = require(APP_MANAGER_PATH + 'auth');
const validationManager = new ValidationManager();

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(config.db.MONGO_CONNECT_URL);

// Use json formatter middleware
app.use(bodyParser.json());
app.use(authManager.providePassport().initialize());

// Set Up validation middleware
app.use(validationManager.provideDefaultValidator());

// Setup routes
app.use('/', routes);

// Setup debug mode
if( process.argv.contains("debug") ) global.config.debug = true;

app.listen(global.config.server.PORT, function () {
    
    global.logger.api("Node.JS RESTfull API");
    if( global.config.debug ){
        global.logger.info("Debug Mode : Activated");
    } 

    global.logger.api('API is running on port ' + global.config.server.PORT);

});