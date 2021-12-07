const getAllRecipes = require('../services/getAllRecipes');

module.exports = async (req, res) => {
  const getRecipes = await getAllRecipes();
  return res.status(200).json(getRecipes);
};
