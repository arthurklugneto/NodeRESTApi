const BaseController = require(APP_CONTROLLER_PATH + 'base');

class AccountController extends BaseController {

    constructor() {
        super();
        this._passport = require('passport');
    }

    getAccounts(req,res,next){
        responseManager.respondWithSuccess(res, responseManager.HTTP_STATUS.OK, "", "");
    }

}

module.exports = AccountController;