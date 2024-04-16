const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameResultSchema = new Schema({
 userChoice: {
    type: String,
    required: false,
    enum: ['pierre', 'feuille', 'ciseaux'],
 },
 serverChoice: {
    type: String,
    required: false,
    enum: ['pierre', 'feuille', 'ciseaux'],
 },
 result: {
    type: String,
    required: false,
    enum: ['Vous avez gagné!', 'Vous avez perdu.', 'Égalité!'],
 },
 createdAt: {
    type: Date,
    default: Date.now,
 },
});

const GameResult = mongoose.model('GameResult', gameResultSchema);

module.exports = GameResult;