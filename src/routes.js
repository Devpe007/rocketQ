const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => response.render('home'));

routes.get('/room', (request, response) => response.render('room'));

routes.get('/create-pass', (request, response) => response.render('create-pass'));

module.exports = routes;
