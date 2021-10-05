const { Router } = require('express');

const QuestionController = require('./controllers/question-controller');

const routes = Router();

routes.get('/', (request, response) => response.render('home', { page: 'enter-room' }));

routes.get('/room', (request, response) => response.render('room'));
routes.post('/room/:room_id/:question_id/:action', QuestionController.index);

routes.get('/create-pass', (request, response) => response.render('home', { page: 'create-pass' }));

module.exports = routes;
