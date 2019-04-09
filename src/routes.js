const express = require('express');
const routes = express.Router();

// Rotas
routes.get('/teste', (req, res) => {
  return res.send('Hello World');
});

module.exports = routes;
