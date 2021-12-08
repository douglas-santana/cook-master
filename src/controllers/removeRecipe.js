const removeRecipe = require('../services/removeRecipe');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { _id, role } = req.user;
  const recipeRemoved = await removeRecipe(id, _id, role);
  return res.status(204).json(recipeRemoved);
};
