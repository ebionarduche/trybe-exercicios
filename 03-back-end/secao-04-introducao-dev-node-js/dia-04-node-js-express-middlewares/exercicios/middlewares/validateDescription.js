const valideteDescription = (descripitonValue, res, value) => {
  if(!descripitonValue) {
    return res.status(400)
    .json({ message: `O campo ${value} é obrigatório` });
  }
}

module.exports = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  return valideteDescription(description, res, 'description')
  || valideteDescription(createdAt, res, 'createdAt')
  || valideteDescription(rating, res, 'rating')
  || valideteDescription(difficulty, res, 'difficulty')
  || next();
};