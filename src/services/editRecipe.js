const editRecipe = require('../models/editRecipe');

module.exports = async (id, name, ingredients, preparation) => {
  const recipeUpdated = await editRecipe(id, name, ingredients, preparation);
  return recipeUpdated;
};
