import Achat from "../models/achat.js";
import games from "./Game.js";
import users from "./User.js";

const achats = [];


export function achatGame(req, res) {
  
    const userId = req.params.idUser;
    const gameId = req.params.idGame;

    const boughtDate = new Date();

    const user = users.find((u) => u.id == userId);
    const game = games.find((g) => g.id == gameId);

    if (!user || !game) {
        return res.status(404).json({ message: "User or game not found" });
    }
    if (game.quantity <= 0) {
        return res.status(400).json({ message: "Game is not available" });
    }
    if (user.wallet < game.price) {
        return res.status(400).json({ message: "Insufficient funds" });
    }

    game.quantity--;
    user.wallet -= game.price;

    const achat = new Achat(gameId, userId, boughtDate);

    achats.push(achat);
   

    res.status(200).json({ message: "Game purchased successfully", achat });
}




