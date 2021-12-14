const questionCtrl = {};
const preguntaSchema = require('../models/questionSchema')

questionCtrl.getQuestions = async(req, res) => {
  const questions = await preguntaSchema.find();
  res.json(questions)
}

questionCtrl.createQuestioner = async (req, res) => {
  const question = new preguntaSchema(req.body);
  await question.save();
  if( question){
    res.json({status: 'success', error: false})
  }else{
    res.json({'status': 'error', error: true})
  }
  
}

module.exports = questionCtrl;