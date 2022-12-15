var Module = require('../models/Module');
var Lesson = require('../models/Lesson');

async function renderListPage(req, res, next) {
  const lessons = await Lesson.findAll({});
  res.render('lesson/list', { lessons });
}

async function renderCreatePage(req, res, next) {
  const modules = await Module.findAll();
  const lessons = await Lesson.findAll();
  res.render('lesson/create', { modules, lessons });
}

async function performCreate(req, res, next) {
  const { title, description, moduleId } = req.body;
  await Lesson.create({ title, description, moduleId });
  res.redirect('/lesson');
}

async function renderDeletePage(req, res, next) {
  res.render('lesson/delete');
}

async function performDelete(req, res, next) {
  await Lesson.destroy({ where: { id: req.params.id } });
  res.redirect('/lesson');
}

async function renderEditPage(req, res, next) {
  const modules = await Module.findAll();
  const lessons = await Module.findAll();
  const lesson = await Lesson.findOne({ where: { id: req.params.id } });
  if (lesson) res.render('lesson/edit', { lesson, modules, lessons });
  else res.status(404).end('Not found');
}

async function performEdit(req, res, next) {
  const { title, description, moduleId, nextLessonId } = req.body;
  await Module.update(
    { title, description, moduleId, nextLessonId },
    { where: { id: req.params.id } }
  );
  res.redirect('/lesson');
}

async function renderViewPage(req, res, next) {
  const lesson = await Lesson.findOne({
    where: { id: req.params.id },
  });
  if (lesson) res.render('lesson/view', { lesson });
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
