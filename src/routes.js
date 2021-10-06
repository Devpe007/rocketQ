const { Router } = require('express');

const QuestionController = require('./controllers/question-controller');
const RoomController = require('./controllers/room-controller');

const routes = Router();

routes.get('/', (request, response) => response.render('home', { page: 'enter-room' }));

routes.get('/room/:room_id', RoomController.open);
routes.post('/create-room', RoomController.create);

routes.post('/question/:room_id/:question_id/:action', QuestionController.index);
routes.post('/question/create/:room_id', QuestionController.create);

routes.get('/create-pass', (request, response) => response.render('home', { page: 'create-pass' }));

module.exports = routes;
