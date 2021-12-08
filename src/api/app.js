const express = require('express');
const path = require('path');
const routes = require('./routes');
const validAuth = require('../middlewares/auth');
const uploadImg = require('../middlewares/uploadImg');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Espondo a pasta uploads para o público
app.use('/images', express.static(path.resolve(__dirname, '../uploads')));

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
app.put('/recipes/:id/image', validAuth, uploadImg, routes.uploadImg);
app.post('/users/admin', validAuth, routes.createAdmins);

module.exports = app;
