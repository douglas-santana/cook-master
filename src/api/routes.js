const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const createRecipes = require('../controllers/createRecipe');
const getAllRecipes = require('../controllers/getAllRecipes');
const getEspecifyRecipe = require('../controllers/getEspecifyRecipe');

module.exports = { createUsers, login, createRecipes, getAllRecipes, getEspecifyRecipe };
