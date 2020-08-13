// import the Potion() constructor at the top of the file
const Potion = require('../lib/Potion');

//Player constructor function
//this here refers to the player object being created

//Previous form
// function Player(name = '') {
//     this.name = name;
  
//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
//     this.inventory = [new Potion('health'), new Potion()];
//   }

  function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
  
    this.inventory = [new Potion('health'), new Potion()];
  
    // returns an object with various player properties
    // this.getStats = function() {
    //   return {
    //     potions: this.inventory.length,
    //     health: this.health,
    //     strength: this.strength,
    //     agility: this.agility
    //   };
    // };
  
    // // returns the inventory array or false if empty
    // this.getInventory = function() {
    //   if (this.inventory.length) {
    //     return this.inventory;
    //   }
    //   return false;
    // };
    
    //rewrite with protype 
    //replacing this.methodName here because what it essentially does is 
    //create a copmletely new method with each new object
    //its very uneconomical as it creates new methods for each player. 
    //If you have a game that creates 100 Player objects, your code will create 
    //a hundred getStats() methods.

    // When using prototype, however, you are only creating the method once 
    //and your creating it INSIDE the constructor itself. This just doesn't work here. 
    //New player objects simply inherit the method from the constructor rather than having 
    //their own instances of that method.
    Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
      
      Player.prototype.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
      };

     Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    Player.prototype.isAlive = function() {
        if (this.health === 0) {
          return false;
        }
        return true;
      };
      
      Player.prototype.reduceHealth = function(health) {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
      };

  }
  
  module.exports = Player;