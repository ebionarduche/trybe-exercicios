module.exports = (req, res, next) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json(
      { message: 'o campo nome é obrigatório' },
    );
  }

  if(name.length < 4) {
    return res.status(400).json(
      { message: 'O campo nome deve ter pelo menos 4 caracteres' }
    )
  }
  next();
};