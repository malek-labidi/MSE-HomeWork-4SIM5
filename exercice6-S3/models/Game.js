export default class Game {
    static nextId = 1;
    constructor(title, description, quantity, price) {
        this.id = Game.nextId++;
        this.title = title;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

}