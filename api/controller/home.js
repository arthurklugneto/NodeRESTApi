const BaseController = require(APP_CONTROLLER_PATH + 'base');
const UserModel = require(APP_MODEL_PATH + 'user').UserModel;
const UserHandler = require(APP_HANDLER_PATH + 'user');

class HomeController extends BaseController{

    constructor(){
        super();
        this._authHandler = new UserHandler();
    }

    get(req,res){
        let responseManager = this._responseManager;
        responseManager.respondWithSuccess(res, responseManager.HTTP_STATUS.OK, null, "Node.JS RESTfull API ["+global.config.version+"]");
    }

    createAdmin(req,res){
        let responseManager = this._responseManager;

        let user = {
            "firstName" : "Administrator",
            "lastName" : "Administrator",
            "email" : "admin@admin.com",
            "password" : "admin123"
        }

        req.body = user;
        this._authHandler.createNewUser(req, responseManager.getDefaultResponseHandler(res));
    }

}

module.exports = HomeController;