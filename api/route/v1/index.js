const express = require('express'),
    router = express.Router();

const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";

router.use('/', require(ROUTE_V1_PATH + 'home'));
router.use('/auth', require(ROUTE_V1_PATH + 'auth'));
router.use('/users', require(ROUTE_V1_PATH + 'user'));
router.use('/account', require(ROUTE_V1_PATH + 'account'));

module.exports = router;