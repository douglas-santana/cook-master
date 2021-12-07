const getEspecifyRecipe = require('../models/getEspecifyRecipe');

module.exports = async (id) => {
  const getRecipes = await getEspecifyRecipe(id);
  return getRecipes;
};
