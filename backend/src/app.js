const express = require('express'); 
const cors = require('cors'); 
const { errors} = require('celebrate');
const routes = require('./routes');
const App = express();

App.use(cors());
App.use(express.json());
App.use(routes);
App.use(errors());

module.exports = App
