const express = require('express');
const routes = require('./routes');
const validAuth = require('../middlewares/auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.post('/users', routes.createUsers);
app.post('/login', routes.login);
app.post('/recipes', validAuth, routes.createRecipes);
app.get('/recipes', routes.getAllRecipes);
app.get('/recipes/:id', routes.getEspecifyRecipe);
app.put('/recipes/:id', validAuth, routes.editRecipe);
app.delete('/recipes/:id', validAuth, routes.removeRecipe);

module.exports = app;
