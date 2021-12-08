const editRecipe = require('../models/editRecipe');
const getEspecifyRecipe = require('../models/getEspecifyRecipe');

module.exports = async (id, user) => {
  const getRecipe = await getEspecifyRecipe(id);
  const { _id, role } = user;
  const image = `localhost:3000/src/uploads/${id}.jpeg`;
  const edit = { ...getRecipe, image };
  if (getRecipe.userId === _id || role === 'admin') await editRecipe(edit);
  return edit;
};
