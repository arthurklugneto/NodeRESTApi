const router = require('express').Router();
const AccountController = require(APP_CONTROLLER_PATH + 'account');
let accountController = new AccountController();

router.get('/',accountController.getAccounts);

module.exports = router;
