const express = require('express');
const flashcard = require('../controllers/Flashcard'); 

const cardRoutes = express.Router();

cardRoutes.post('/', flashcard.createFlashcard);
cardRoutes.get('/get', flashcard.getAllFlashcards);
cardRoutes.patch('/update/:id', flashcard.updateFlashcard);
cardRoutes.delete('/delete/:id', flashcard.deleteFlashcard);

module.exports = cardRoutes;
