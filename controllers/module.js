var Module = require('../models/Module');
var Course = require('../models/Course');

async function renderListPage(req, res, next) {
  const modules = await Module.findAll();
  res.render('module/list', { modules });
}

async function renderCreatePage(req, res, next) {
  const courses = await Course.findAll();
  res.render('module/create', { courses });
}

async function performCreate(req, res, next) {
  const { title, courseId } = req.body;
  await Module.create({ title, courseId });
  res.redirect('/module');
}

async function renderDeletePage(req, res, next) {
  res.render('module/delete');
}

async function performDelete(req, res, next) {
  await Module.destroy({ where: { id: req.params.id } });
  res.redirect('/module');
}

async function renderEditPage(req, res, next) {
  const courses = await Course.findAll();
  const module_ = await Module.findOne({
    where: { id: req.params.id },
    include: Course,
  });
  if (module_) res.render('module/edit', { module: module_, courses });
  else res.status(404).end('Not found');
}

async function performEdit(req, res, next) {
  const { title, courseId } = req.body;
  await Module.update({ title, courseId }, { where: { id: req.params.id } });
  res.redirect('/module');
}

async function renderViewPage(req, res, next) {
  const module_ = await Module.findOne({
    include: { model: Course },
    where: { id: req.params.id },
  });
  if (module_) res.render('module/view', { module: module_ });
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
