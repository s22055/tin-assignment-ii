var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('module/list');
});
router.get('/create', function(req, res, next) {
  res.render('module/create');
});
router.get('/delete', function(req, res, next) {
  res.render('module/delete');
});
router.get('/edit', function(req, res, next) {
  res.render('module/edit');
});
router.get('/view', function(req, res, next) {
  res.render('module/view');
});

module.exports = router;
