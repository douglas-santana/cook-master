const getEspecifyRecipe = require('../services/getEspecifyRecipe');

module.exports = async (req, res) => {
  const { id } = req.params;
  const getRecipes = await getEspecifyRecipe(id);
  if (!getRecipes) return res.status(404).json({ message: 'recipe not found' });
  return res.status(200).json(getRecipes);
};
