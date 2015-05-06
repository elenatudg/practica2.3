var models = require('../models/models.js');

// Autoload - factoriza el codigo si ruta incluye :quizId
exports.load = function(req,res, next, quizId) {
        models.Quiz.find(quizId).then(function(quiz){
        if (quiz) {
         req.quiz = quiz;
         next();
        }else { next(new Error('No existe quizId=' + quizId)); }
        }
      ).catch(function(error) { next(error);}); 
};


//GET /quizes
exports.index = function(req,res) {
        models.Quiz.findAll().then(function(quizes){
       res.render('quizes/index', {quizes: quizes});
      }
    ).catch(function(error) { next(error);})
};

//GET /quizes/:id
exports.show = function(req,res) {
        //models.Quiz.find(req.params.quizId).then(function(quiz) {
       //  models.Quiz.findAll().success(function(quiz){
	// res.render('quizes/show', {pregunta: quiz[0].pregunta})
       res.render('quizes/show', {quiz: req.quiz});

};

//GET /quizes/:id/answer
exports.answer = function(req,res) {
  var resultado = 'Incorrecto';
 //models.Quiz.findAll().success(function(quiz){
  //models.Quiz.find(req.params.quizId).then(function(quiz) {
          //if (req.query.respuesta === quiz[0].respuesta){
	if (req.query.respuesta === req.quiz.respuesta){
           resultado = 'Correcto';
        } 
	res.render('quizes/answer',{quiz: req.quiz, respuesta: resultado});
	
};
