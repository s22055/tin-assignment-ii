var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('course/list');
});
router.get('/create', function(req, res, next) {
  res.render('course/create');
});
router.get('/delete', function(req, res, next) {
  res.render('course/delete');
});
router.get('/edit', function(req, res, next) {
  res.render('course/edit');
});
router.get('/view', function(req, res, next) {
  res.render('course/view');
});

module.exports = router;
