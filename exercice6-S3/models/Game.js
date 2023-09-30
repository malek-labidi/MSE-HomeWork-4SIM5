export default class Game {
    static nextId = 1;
    constructor(title, description, quantity, price) {
        this.id = Game.nextId++;
        this.title = title;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
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