var express = require('express');
var courseConrollers = require('../controllers/course');
var router = express.Router();

router.get('/', courseConrollers.renderListPage);
router.get('/create', courseConrollers.renderCreatePage);
router.post('/create', courseConrollers.performCreate);
router.get('/delete/:id', courseConrollers.renderDeletePage);
router.post('/delete/:id', courseConrollers.performDelete);
router.get('/edit/:id', courseConrollers.renderEditPage);
router.post('/edit/:id', courseConrollers.performEdit);
router.get('/view/:id', courseConrollers.renderViewPage);

module.exports = router;
