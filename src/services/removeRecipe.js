const removeRecipe = require('../models/removeRecipe');
const getEspecifyRecipe = require('../models/getEspecifyRecipe');

module.exports = async (id, _id, role) => {
  const findRecipe = await getEspecifyRecipe(id);
  if (role === 'admin' || findRecipe.userId === _id) {
    const productRemoved = await removeRecipe(id);
  return productRemoved;
  }
  return null;
};
