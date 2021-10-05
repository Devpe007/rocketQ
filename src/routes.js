const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => response.render('home'));

module.exports = routes;
