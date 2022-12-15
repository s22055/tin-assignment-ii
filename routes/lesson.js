var express = require('express');
var lessonConrollers = require('../controllers/lesson');
var router = express.Router();

router.get('/', lessonConrollers.renderListPage);
router.get('/create', lessonConrollers.renderCreatePage);
router.post('/create', lessonConrollers.performCreate);
router.get('/delete/:id', lessonConrollers.renderDeletePage);
router.post('/delete/:id', lessonConrollers.performDelete);
router.get('/edit/:id', lessonConrollers.renderEditPage);
router.post('/edit/:id', lessonConrollers.performEdit);
router.get('/view/:id', lessonConrollers.renderViewPage);

module.exports = router;
