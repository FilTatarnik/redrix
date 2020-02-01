const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const Guardian = require('./models/guardian');
const jquery = require('jquery');

const PORT = process.evn.PORT || 3000;


require ('./db/db');


/******** MiddleWare ********/
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride)