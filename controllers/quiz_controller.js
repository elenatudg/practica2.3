var models = require('../models/models.js');
//GET /quizes/:id
exports.show = function(req,res) {
        models.Quiz.find(req.params.quizId).then(function(quiz) {
	 res.render('quizes/show', {pregunta: quiz[0].pregunta})
})
};

//GET /quizes/:id/answer
exports.answer = function(req,res) {
models.Quiz.find(req.params.quizId).then(function(quiz) {
	if (req.query.respuesta === quiz.respuesta){
	  res.render('quizes/answer', 
               {quiz:quiz,  respuesta: 'Correcto' });
	} else {
	  res.render('quizes/answer',
                 {quiz:quiz, respuesta: 'Incorrecto'});
	}
})
};
