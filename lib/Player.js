// import the Potion() constructor at the top of the file
const Potion = require('../lib/Potion');

//Player constructor function
//this here refers to the player object being created
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
  }
  
  module.exports = Player;