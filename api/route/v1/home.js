const router = require('express').Router();
const HomeController = require(APP_CONTROLLER_PATH + 'home');
let homeController = new HomeController();

router.get('/',homeController.get);

if(global.config.debug){
    router.get('/admin',homeController.createAdmin);
    global.logger.info('Create Admin User define in route /admin');
}

module.exports = router;