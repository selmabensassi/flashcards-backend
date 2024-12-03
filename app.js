const express = require('express');
var cors = require('cors');
const app = express();
const cardRoutes = require('./routes/FlashcardRoutes');

app.use(cors());
app.use(express.json());

app.use('/card',cardRoutes);

module.exports = app;