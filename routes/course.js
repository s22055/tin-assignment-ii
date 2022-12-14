var express = require('express');
var Course = require('../sequelize/Course');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const courses = await Course.findAll();
  res.render('course/list', { courses });
});

router.get('/create', async (req, res, next) => {
  res.render('course/create');
});
router.post('/create', async (req, res, next) => {
  const { title, description, launch_date } = req.body;
  await Course.create({ title, description, launch_date });
  res.redirect('/course');
});

router.get('/delete/:id', async (req, res, next) => {
  res.render('course/delete');
});
router.post('/delete/:id', async (req, res, next) => {
  await Course.destroy({ where: { id: req.params.id } });
  res.redirect('/course');
});

router.get('/edit/:id', async (req, res, next) => {
  const course = await Course.findOne({ where: { id: req.params.id } });
  if (course) res.render('course/edit', { course });
  else res.status(404).end('Not found');
});
router.post('/edit/:id', async (req, res, next) => {
  const { title, description, launch_date } = req.body;
  await Course.update(
    { title, description, launch_date },
    { where: { id: req.params.id } }
  );
  res.redirect('/course');
});

router.get('/view/:id', async (req, res, next) => {
  const course = await Course.findOne({ where: { id: req.params.id } });
  if (course) res.render('course/view', { course });
  else res.status(404).end('Not found');
});

module.exports = router;
