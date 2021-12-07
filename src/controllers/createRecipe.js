const insertRecipe = require('../services/createRecipe');
const recipeVerifys = require('./recipeVerify');

module.exports = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const recipeCreated = await insertRecipe(name, ingredients, preparation, _id);
  if (!recipeCreated.message) return res.status(201).json(recipeCreated);
  await recipeVerifys(res, recipeCreated);
};
