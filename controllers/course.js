var Course = require('../models/Course');

async function renderListPage(req, res, next) {
  const courses = await Course.findAll();
  res.render('course/list', { courses });
}

async function renderCreatePage(req, res, next) {
  res.render('course/create');
}

async function performCreate(req, res, next) {
  const { title, description, launch_date } = req.body;
  await Course.create({ title, description, launch_date });
  res.redirect('/course');
}

async function renderDeletePage(req, res, next) {
  res.render('course/delete');
}

async function performDelete(req, res, next) {
  await Course.destroy({ where: { id: req.params.id } });
  res.redirect('/course');
}

async function renderEditPage(req, res, next) {
  const course = await Course.findOne({ where: { id: req.params.id } });
  if (course) res.render('course/edit', { course });
  else res.status(404).end('Not found');
}

async function performEdit(req, res, next) {
  const { title, description, launch_date } = req.body;
  await Course.update(
    { title, description, launch_date },
    { where: { id: req.params.id } }
  );
  res.redirect('/course');
}

async function renderViewPage(req, res, next) {
  const course = await Course.findOne({ where: { id: req.params.id } });
  if (course) res.render('course/view', { course });
  else res.status(404).end('Not found');
}

module.exports = {
  renderListPage,
  renderCreatePage,
  performCreate,
  renderDeletePage,
  performDelete,
  renderEditPage,
  performEdit,
  renderViewPage,
};
