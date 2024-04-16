const GameResult = require("../models/GameResult");
const controller = {};
controller.getScore = async (req, res) => {
 const results = await GameResult.find({});
 const win = results.filter(result => result.result === "Vous avez gagné!").length;
 const lose = results.filter(result => result.result === "Vous avez perdu.").length;
 const égalité = results.filter(result => result.result === "Égalité!").length;

 res.json({ win, lose, égalité });
};

controller.playGame = async (req, res) => {
 const userChoice = req.params.action;
 const choices = ["pierre", "feuille", "ciseaux"];
 const serverChoice = choices[Math.floor(Math.random() * choices.length)];
 let result;

 if (userChoice === serverChoice) {
    result = "Égalité!";
 } else if (
    (userChoice === "pierre" && serverChoice === "ciseaux") ||
    (userChoice === "feuille" && serverChoice === "pierre") ||
    (userChoice === "ciseaux" && serverChoice === "feuille")
 ) {
    result = "Vous avez gagné!";
 } else {
    result = "Vous avez perdu.";
 }

 const gameResult = new GameResult({
    userChoice,
    serverChoice,
    result,
 });
 await gameResult.save();

 // Formater la réponse pour inclure le choix de l'utilisateur, le choix du serveur, et le résultat
 res.json({
    message: `Vous avez joué ${userChoice}, le serveur a joué ${serverChoice}. Vous avez ${result}`,
    userChoice,
    serverChoice,
    result
 });
};

controller.restartGame = async (req, res) => {
 await GameResult.deleteMany({});
 res.json({ win: 0, lose: 0, égalité: 0 });
};

controller.setScore = async (req, res) => {
 const { win, lose, égalité } = req.params;
 await GameResult.deleteMany({});

 for (let i = 0; i < win; i++) {
    await new GameResult({ result: "Vous avez gagné!" }).save();
 }
 for (let i = 0; i < lose; i++) {
    await new GameResult({ result: "Vous avez perdu." }).save();
 }
 for (let i = 0; i < égalité; i++) {
    await new GameResult({ result: "Égalité!" }).save();
 }

 res.json({ win, lose, égalité });
};

module.exports = controller;