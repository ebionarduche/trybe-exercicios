const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreateAt = require('../middlewares/validateCreateAt');

const app = express()

app.use(express.json());

app.post('/activities', 
validateName,
validatePrice,
validateDescription,
validateCreateAt,
(_req, res) => {
  res.status(201).json({message: 'Atividade registrada com sucesso!'})
})


//Quero enviar isso para um outro arquivo e pode add meus posts e tbm Vizualiar, assistir aulas de métodos e ver o exercicios de filmes para poder add novos itens 
// app.get('/activities', (_req, res) => {
//   const activities = [
//     { id: 1, name: 'Atividade 1', price: 10.0, description: 'Descrição da atividade 1' },
//     { id: 2, name: 'Atividade 2', price: 20.0, description: 'Descrição da atividade 2' },
//     { id: 3, name: 'Atividade 3', price: 30.0, description: 'Descrição da atividade 3' }
//   ];
//   res.status(200).json(activities);
// });


module.exports = app;