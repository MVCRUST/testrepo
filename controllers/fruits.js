const Fruit = require("../models/Fruit")

//INDEX
const index = async (req, res) => {
    try {
    const fruits = await Fruit.showAll()
    res.status(200).send(fruits)
    } catch (error) {
        res.status(500).send({"error": "Server error"}) //You don't have to send back as an object, tends to depend on the place you work at's convention
    }
    
};

//SHOW
const show = async (req, res) => {
  //:name is a parameter
  const name = req.params.name.toLowerCase(); //This is making a variable which is a lower case of whatever input placed in the browser
  try {
    const fruit = await Fruit.showOne(name)
    res.status(200).send(fruit)
  } catch (error) {
    res.status(404). send({"error":"fruit not found"})
  }
};

//CREATE
const create = async (req, res) => {
  try {
      const fruitData = req.body
      const newFruit = await Fruit.create(fruitData)
      res.status(201).send(newFruit)
  } catch (error) {
    res.status(409).send("Not able to add Fruit")
  }
}

//UPDATE - this happens on the instance of the fruit, not on the whole class
const update = async (req, res) => {
  const name = req.params.name.toLowerCase()
  try {
      const fruit = await Fruit.showOne(name) //We can just use the show function to get the name
      console.log("hello")
      const result = await fruit.update(req.body)
      res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No fruit with that name found")
  }
}

//DESTROY
const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase()
  try {
      const fruit = await Fruit.showOne(name)
      const result = await fruit.destroy(req.body)
      res.status(204).send("Item deleted")
  } catch (error) {
    res.status(404).send("Fruit data not found")
  }
}

module.exports = {
    index, show, create, update, destroy
}