const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const createRecipes = require('../controllers/createRecipe');
const getAllRecipes = require('../controllers/getAllRecipes');
const getEspecifyRecipe = require('../controllers/getEspecifyRecipe');
const editRecipe = require('../controllers/editRecipe');
const removeRecipe = require('../controllers/removeRecipe');
const createAdmins = require('../controllers/createAdmin');

module.exports = {
  createUsers,
  login,
  createRecipes,
  getAllRecipes,
  getEspecifyRecipe,
  editRecipe,
  removeRecipe,
  createAdmins,
};
