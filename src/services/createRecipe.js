const recipeVerifys = require('./recipeVerify');
const createRecipe = require('../models/createRecipe');

module.exports = async (name, ingredients, preparation) => {
  const verifys = await recipeVerifys(name, ingredients, preparation);
  if (verifys) return verifys;
  return createRecipe(name, ingredients, preparation);
};
