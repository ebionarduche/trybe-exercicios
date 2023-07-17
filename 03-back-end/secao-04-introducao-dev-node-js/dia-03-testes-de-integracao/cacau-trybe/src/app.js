const express = require('express')
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllchocolates();
  res.status(200).json({ chocolates });
});

module.exports = app