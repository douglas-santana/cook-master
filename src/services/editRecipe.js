const editRecipe = require('../models/editRecipe');
const getEspecifyRecipe = require('../models/getEspecifyRecipe');

module.exports = async ({ id, name, ingredients, preparation, user }) => {
  const { _id, role } = user;
  const findRecipe = await getEspecifyRecipe(id);
  if (role === 'admin' || findRecipe.userId === _id) {
    const recipeUpdated = await editRecipe({ id, name, ingredients, preparation, _id });
  return recipeUpdated;
  }
  return null;
};
