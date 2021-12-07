const insertRecipe = require('../services/createRecipe');
const recipeVerifys = require('./recipeVerify');

module.exports = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const recipeCreated = await insertRecipe(name, ingredients, preparation);
  if (!recipeCreated.message) return res.status(201).json(recipeCreated);
  await recipeVerifys(res, recipeCreated);
};
