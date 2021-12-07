const recipeVerifys = require('./recipeVerify');
const createRecipe = require('../models/createRecipe');

module.exports = async (name, ingredients, preparation, _id) => {
  const verifys = await recipeVerifys(name, ingredients, preparation);
  if (verifys) return verifys;
  return createRecipe(name, ingredients, preparation, _id);
};
