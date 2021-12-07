const getAllRecipes = require('../models/getAllRecipes');

module.exports = async () => {
  const getRecipes = await getAllRecipes();
  return getRecipes;
};
