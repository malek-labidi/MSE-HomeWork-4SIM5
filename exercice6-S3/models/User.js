export default class User {
    static nextId = 1;
    constructor(username, password, wallet) {
        this.id = User.nextId++;
        this.username = username;
        this.password = password;
        this.wallet = wallet;
    }
}