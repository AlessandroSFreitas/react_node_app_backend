const express = require('express');
const routes = express.Router();

// Rotas
routes.get('/users', (req, res) => {
  return res.send('Hello World!!!');
});

module.exports = routes;
