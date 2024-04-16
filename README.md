# Game Project

Ce projet est une application de jeu de pierre, feuille, ciseaux développée avec Node.js et Express. Il utilise MongoDB pour stocker les résultats des parties de jeu.

## Fonctionnalités

- Jouer une partie de pierre, feuille, ciseaux contre le serveur.
- Obtenir le score actuel des victoires, des défaites, et des égalités.
- Redémarrer le jeu pour réinitialiser le score.
- Définir manuellement le score.

## Installation

L'application sera accessible à l'adresse `http://localhost:<PORT>`, où `<PORT>` est le port que vous avez configuré.

## Routes

- `GET /game/score` : Obtenir le score actuel.
- `GET /game/play/:action` : Jouer une partie en spécifiant l'action de l'utilisateur.
- `GET /game/restart` : Redémarrer le jeu.
- `GET /game/score/:win/:lose/:tie` : Définir manuellement le score.
- `POST /game/play` : Soumettre le choix de l'utilisateur via un formulaire.
