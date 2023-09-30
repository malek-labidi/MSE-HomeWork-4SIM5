import User from '../models/user.js';

var users = [new User("malek", "malek123", 400), new User("youssef", "youssef", 200)];

/**
 * 
 * @param {*} req
 * @param {*} res 
 * Ajouter un utilisateur
 * 
 */
export function CreateUser(req, res) {
    const user = new User(req.body.username, req.body.password, req.body.wallet);

    users.push(user);
    const userwithoutid = { ...user};
    delete userwithoutid.id;
    res.status(201).json({ message: "Created !", entity: userwithoutid });
}

/**
 * 
 * @param {*} req
 * @param {*} res
 * Modifier un utilisateur
 * 
 */
export function UpdateUser(req, res) {
    const updatedUserData = req.body;
    const user = users.find((u) => u.id == parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (updatedUserData.username) {
        user.username = updatedUserData.username;
    }
    if (updatedUserData.password) {
        user.password = updatedUserData.password;
    }
    if (updatedUserData.wallet) {
        user.wallet = updatedUserData.wallet;
    }

    res.status(200).json({ message: "Updated !", entity: user });
}


/**
 * 
 * @param {*} req
 * @param {*} res
 * Authtification d'un utilisateur
 * 
 */
export function SignUser(req, res) {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "User not found !" });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: "Wrong password !" });
    }

    res.status(200).json({ message: "Authentication Successful", entity: user });

}

export default users;

