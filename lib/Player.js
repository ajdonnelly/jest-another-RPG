// import the Potion() constructor at the top of the file
const Potion = require('../lib/Potion');
const Character = require('./Character');
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
  class Player extends Character {
    constructor(name = '') {

      // call parent constructor here:
      super(name);

      this.inventory = [new Potion('health'), new Potion()];
    }
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }

    getInventory() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    }
  
    addPotion(potion) {
      this.inventory.push(potion);
    }
  
    usePotion(index) {
      const potion = this.inventory.splice(index, 1)[0];
  
      switch (potion.name) {
        case 'agility':
          this.agility += potion.value;
          break;
        case 'health':
          this.health += potion.value;
          break;
        case 'strength':
          this.strength += potion.value;
          break;
      }
    }
  }

  // }
  // function Player(name = '') {
  //   this.name = name;
  
  //   this.health = Math.floor(Math.random() * 10 + 95);
  //   this.strength = Math.floor(Math.random() * 5 + 7);
  //   this.agility = Math.floor(Math.random() * 5 + 7);
  
  //   this.inventory = [new Potion('health'), new Potion()];
  
  //   // inherit prototype methods from Character here:
  //   Player.prototype = Object.create(Character.prototype);

  //   Player.prototype.getStats = function() {
  //     return {
  //       potions: this.inventory.length,
  //       health: this.health,
  //       strength: this.strength,
  //       agility: this.agility
  //     };
  //   };
  //   // returns an object with various player properties
  //   // this.getStats = function() {
  //   //   return {
  //   //     potions: this.inventory.length,
  //   //     health: this.health,
  //   //     strength: this.strength,
  //   //     agility: this.agility
  //   //   };
  //   // };
  
  //   // // returns the inventory array or false if empty
  //   // this.getInventory = function() {
  //   //   if (this.inventory.length) {
  //   //     return this.inventory;
  //   //   }
  //   //   return false;
  //   // };
    
  //   //rewrite with protype 
  //   //replacing this.methodName here because what it essentially does is 
  //   //create a copmletely new method with each new object
  //   //its very uneconomical as it creates new methods for each player. 
  //   //If you have a game that creates 100 Player objects, your code will create 
  //   //a hundred getStats() methods.

  //   // When using prototype, however, you are only creating the method once 
  //   //and your creating it INSIDE the constructor itself. This just doesn't work here. 
  //   //New player objects simply inherit the method from the constructor rather than having 
  //   //their own instances of that method.
  //   Player.prototype.getStats = function() {
  //       return {
  //         potions: this.inventory.length,
  //         health: this.health,
  //         strength: this.strength,
  //         agility: this.agility
  //       };
  //     };
      
  //     Player.prototype.getInventory = function() {
  //       if (this.inventory.length) {
  //         return this.inventory;
  //       }//returns false if the inventory is empty
  //       return false;
  //     };

  //       Player.prototype.addPotion = function(potion) {
  //       this.inventory.push(potion);
  //       };

  //       Player.prototype.usePotion = function(index) {
  //         //requires the index of the object in the array 
  //         const potion = this.getInventory().splice(index, 1)[0];
          
  //           switch (potion.name) {
  //             case 'agility':
  //               this.agility += potion.value;
  //               break;
  //             case 'health':
  //               this.health += potion.value;
  //               break;
  //             case 'strength':
  //               this.strength += potion.value;
  //               break;
  //           }
  //         };
  // }
  
  module.exports = Player;