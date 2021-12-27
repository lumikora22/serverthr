const questionCtrl = {};
const preguntaSchema = require('../models/questionSchema')

questionCtrl.getQuestions = async (req, res) => {
  const questions = await preguntaSchema.find();
  res.json(questions)
}

questionCtrl.deleteQuestioner = async (req, res) => {
  const id_document = req.params.id;
  const clientDelete = await preguntaSchema.findByIdAndRemove(id_document);
  res.json({ status: 'eliminado', error: false })
}

questionCtrl.createQuestioner = async (req, res) => {
  const question = new preguntaSchema(req.body);
  await question.save();
  if (question) {
    res.json({ status: 'success', error: false })
  } else {
    res.json({ 'status': 'error', error: true })
  }

}


module.exports = questionCtrl;