import Achat from "../models/Achat.js";
import Game from "../models/game.js";
import User from "../models/user.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Ajouter un achat
 */
export async function achatGame(req, res) {
    const userId = req.params.userId;
    const gameId = req.params.gameId;
    const dateNow = new Date();
console.log(userId);
    try {
        const user = await User.findById(userId);
        const game = await Game.findById(gameId);

        if (!user || !game) {
            return res.status(404).json({ message: 'User or game not found' });
        }

        // Check if the user has enough money to buy the game
        if (user.wallet < game.price) {
            return res.status(400).json({ message: 'out of budget' });
        }

        // Create a new Achat document using Mongoose's create method
        const achat = await Achat.create({
            boughtDate: dateNow,
            user: user._id,
            game: game._id
        });

        // Update user's wallet and save the changes
        user.wallet -= game.price;
        await user.save();

        res.status(201).json(achat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}



