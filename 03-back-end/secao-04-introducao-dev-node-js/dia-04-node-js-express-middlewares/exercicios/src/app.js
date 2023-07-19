const express = require('express');
const validadeName = require('../middlewares/validadeName');

const app = express()

app.use(express.json());

app.post('/activities', validadeName, (_req, res) => {
  res.status(201).json({message: 'Atividade registrada com sucesso!'})
})

module.exports = app;