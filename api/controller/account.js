const BaseController = require(APP_CONTROLLER_PATH + 'base');
Web3 = require('web3')
solc = require('solc')
fs = require('fs');

class AccountController extends BaseController {

    constructor() {
        super();
        this._passport = require('passport');
    }

    getAccounts(req,resp,next){
        let responseManager = this._responseManager;
        let that = this;

        var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

        responseManager.respondWithSuccess(resp, responseManager.HTTP_STATUS.OK, web3.eth.accounts, "");
    }

}

module.exports = AccountController;