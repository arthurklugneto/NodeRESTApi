const BaseController = require(APP_CONTROLLER_PATH + 'base');
const UserModel = require(APP_MODEL_PATH + 'user').UserModel;
const UserHandler = require(APP_HANDLER_PATH + 'user');
const enums = require("../enums");

class HomeController extends BaseController{

    constructor(){
        super();
        this._authHandler = new UserHandler();
    }

    get(req,res){
        let responseManager = this._responseManager;
        responseManager.respondWithSuccess(res, responseManager.HTTP_STATUS.OK, null, global.config.app.name + " ["+global.config.app.version+"]");
    }

    createAdmin(req,res){
        let responseManager = this._responseManager;

        let user = {
            "firstName" : "Administrator",
            "lastName" : "Administrator",
            "email" : "admin@admin.com",
            "password" : "admin123",
            "userRole": enums.UserRole.Admin
        }
        req.body = user;
        this._authHandler.createNewUser(req, responseManager.getDefaultResponseHandler(res));
    }

    removeAdmin(req,res){
        let responseManager = this._responseManager;
        let user = {
            "email" : "admin@admin.com"
        }
        req.body = user;
        this._authHandler.removeUserAdmin(req, responseManager.getDefaultResponseHandler(res));
    }

}

module.exports = HomeController;