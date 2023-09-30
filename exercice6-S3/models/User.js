export default class User {
    static nextId = 1;
    constructor(username, password, wallet) {
        this.id = User.nextId++;
        this.username = username;
        this.password = password;
        this.wallet = wallet;
        this.achats = [];
    }

    addAchat(achat) {
        this.achats.push(achat);
    }

    removeAchat(achat) {
        const index = this.achats.indexOf(achat);
        if (index !== -1) {
            this.achats.splice(index, 1);
        }
    }
}