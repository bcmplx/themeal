const { Router } = require('express');
const router = Router('v1');
const categoryController = require('./controller');

router.get('/', categoryController.home);
router.get('/categories/', categoryController.allCategories);
router.get('/category/:id', categoryController.oneCategory);
router.get('/meal/:id', categoryController.oneMeal);
router.get('/areas', categoryController.allAreas);
router.get('/area/:id', categoryController.oneArea);
router.get('/random/', categoryController.randomMeal);

module.exports = router;