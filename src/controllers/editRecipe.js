const editRecipe = require('../services/editRecipe');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const { user } = req;
  const recipeUpdated = await editRecipe({ id, name, ingredients, preparation, user });
  if (recipeUpdated) return res.status(200).json(recipeUpdated);
  return res.status(200).json({ message: 'oi' });
};
