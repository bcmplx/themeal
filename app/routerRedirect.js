const { Router } = require('express');

const routerRedirect = Router();

const categoryController = require('./controller');

routerRedirect.get('/', categoryController.allRedirection);
routerRedirect.get('/:url', categoryController.allRedirection);
routerRedirect.get('/:url/:name', categoryController.allRedirection);


module.exports = routerRedirect;