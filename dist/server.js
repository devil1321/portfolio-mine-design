"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use('/js', express.static(__dirname + '/js'));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home');
});
app.listen(PORT, (req, res) => {
    console.log(`server started on ${PORT}`);
});
