var express = require('express');
var moduleConrollers = require('../controllers/module');
var router = express.Router();

router.get('/', moduleConrollers.renderListPage);
router.get('/create', moduleConrollers.renderCreatePage);
router.post('/create', moduleConrollers.performCreate);
router.get('/delete/:id', moduleConrollers.renderDeletePage);
router.post('/delete/:id', moduleConrollers.performDelete);
router.get('/edit/:id', moduleConrollers.renderEditPage);
router.post('/edit/:id', moduleConrollers.performEdit);
router.get('/view/:id', moduleConrollers.renderViewPage);

module.exports = router;
