export default class Achat {
    static nextId = 1;
    constructor(game, user, boughtDate) {
        this.id = Achat.nextId++;
        this.user = user;
        this.game = game;
        this.boughtDate = boughtDate;
    }
}