import User from '../models/user.js';


/**
 * 
 * @param {*} req
 * @param {*} res 
 * Ajouter un utilisateur
 * 
 */
export function CreateUser(req, res) {
    User
        .create(req.body)
        .then((newUser) => {
            res.status(201).json(
                {
                    username: newUser.username,
                    password: newUser.password,
                    wallet: newUser.wallet,
                }
            );
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * 
 * @param {*} req
 * @param {*} res
 * Modifier un utilisateur
 * 
 */
export function UpdateUser(req, res) {
    User
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
 * Authenfication d'un utilisateur
 * 
 */
export function SignUser(req, res) {
    User
        .findOne({ "username": req.body.username, "password": req.body.password })
        .then(newUser => {
            res.status(200).json(
                {
                    username: newUser.username,
                    password: newUser.password,
                    wallet: newUser.wallet,
                }
            );
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });


}



