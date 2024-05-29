const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Setting up Handlebars for Express
app.set('view engine', 'hbs'); // Using Handlebars for Express
hbs.registerPartials(__dirname + '/views/partials'); // Using partials

// Serving static content
app.use(express.static('public')); // Middleware definition for Express. If 'public' is located elsewhere, specify the path

// Route handlers
app.get('/', (req, res) => {
  res.render('home', { // These are the arguments
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//http://localhost:8080
