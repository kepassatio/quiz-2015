var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* Primera pregunta*/
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
/* Creditos*/
router.get('/author', quizController.author);

module.exports = router;
