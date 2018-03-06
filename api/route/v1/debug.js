const router = require('express').Router();
const DebugController = require(APP_CONTROLLER_PATH + 'post');
let debugController = new DebugController();

module.exports = router;