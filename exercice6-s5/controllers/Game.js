import { validationResult } from "express-validator";
import Game from "../models/game.js";

/**
 * 
 * @param {*} req
 * @param {*} res
 * Ajouter un jeu
 */
export function createGame(req, res) {

    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    } else {
        Game
            .create(req.body)
            .then((newGame) => {
                res.status(201).json(
                    {
                        title: newGame.title,
                        description: newGame.description,
                        quantity: newGame.quantity,
                        price: newGame.price
                    }
                );
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }


}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Modifier un jeu
 */
export function UpdateGame(req, res) {
    Game
        .findByIdAndUpdate(req.params.id, req.body)
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * afficher tous les jeux
 */
export function GetAllGames(req, res) {

    Game
        .find({})
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * afficher un jeu
 */
export function GetGame(req, res) {
    Game
        .findByIdAndUpdate(req.params.id, req.body)
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

