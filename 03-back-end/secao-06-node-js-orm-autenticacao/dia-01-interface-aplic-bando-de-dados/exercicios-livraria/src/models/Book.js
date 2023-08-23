module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createAt: DataTypes.DataTypes,
    updateAt: DataTypes.DataTypes,
  })

  return Book
};