var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('lesson/list');
});
router.get('/create', function(req, res, next) {
  res.render('lesson/create');
});
router.get('/delete', function(req, res, next) {
  res.render('lesson/delete');
});
router.get('/edit', function(req, res, next) {
  res.render('lesson/edit');
});
router.get('/view', function(req, res, next) {
  res.render('lesson/view');
});

module.exports = router;
