const editRecipe = require('../services/editRecipe');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const recipeUpdated = await editRecipe(id, name, ingredients, preparation);
  if (recipeUpdated) return res.status(200).json(recipeUpdated);
};
