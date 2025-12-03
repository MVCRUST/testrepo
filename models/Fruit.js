const fruits = require("../fruits.json")

class Fruit{
    constructor ({genus, name, id, family, order, nutritions}) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => { //This means this will stay on the class, and won't move on
        return fruits.map(fruit => new Fruit(fruit))
    }

    static showOne = (name) => {
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name)
        if (fruit.length == 1){
            return new Fruit(fruit[0])
        } else {
            throw Error("The fruit does not exist")
        }
    }

    static create = (data) => {
        // At this point data is: {name: "Starberry"}
        const newFruit = data
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == newFruit.name.toLowerCase())
        if(!updatedFruit) {
        newFruit["id"] = fruits.length + 1 //normally, it will automatically update the id
        // Here it's: {name: "Starberry", id: num}
        fruits.push(newFruit)
        return new Fruit(newFruit)
        } else {
            throw Error("Fruit already exists")
        }
    }

    //static method doesn't pass down to the instaance, so for update, we do want it to pass to the instance
    update(data) { //This would normally be done in SQL, but in this case this is JavaScript
            const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
            if (updatedFruit) {
                updatedFruit.name = data.name
                return new Fruit(updatedFruit)
            } else {
                throw new Error("Fruit not found")
            }
    } //'this' doesn't work the with arrow functions, 

    destroy() {
    const index = fruits.findIndex(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());
    if (index !== -1) {
        fruits.splice(index, 1);
    } else {
        throw new Error("Fruit not found");
    }
}

}

module.exports = Fruit