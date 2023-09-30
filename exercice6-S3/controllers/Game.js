import Game from "../models/game.js";

const games = [new Game("GTA V", "GTA V est un jeu vidéo d'action-aventure en monde ouvert développé par Rockstar North et édité par Rockstar Games.", 10, 50),new Game("FIFA 21", "FIFA 21 est un jeu vidéo de simulation de football édité par Electronic Arts.", 10, 60)];

export function createGame(req, res) {
    const game = new Game(req.body.title, req.body.description, req.body.quantity, req.body.price);

    games.push(game);
    const gamewithoutid = { ...game };
    delete gamewithoutid.id;

    res.status(201).json({ message: "Created !", entity: gamewithoutid });
}


export function UpdateGame(req, res) {
    const updatedGameData = req.body;
    const game = games.find((g) => g.id == parseInt(req.params.id));

    if (!game) {
        return res.status(404).json({ message: "Game not found" });
    }

    if(updatedGameData.title){
        game.title = updatedGameData.title;
    }
    if(updatedGameData.description){
        game.description = updatedGameData.description;
    }
    if(updatedGameData.quantity){
        game.quantity = updatedGameData.quantity;
    }
    if(updatedGameData.price){
        game.price = updatedGameData.price;
    }

    res.status(200).json({ message: "Updated !", entity: game });
}


export function GetAllGames(req, res) {

    res.status(200).json({ message: "All games", entity: games });
}


export function GetGame(req, res) {
    const game = games.find((u) => u.id == parseInt(req.params.id));

    if (!game) {
        return res.status(404).json({ message: "Game not found" });
    }

    res.status(200).json({ message: "Game", entity: game });
}


export default games;