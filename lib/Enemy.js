const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor (name, weapon) {

    // call parent constructor here:
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
    
    this.weapon = weapon;
    this.potion = new Potion();

    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}
// function Enemy(name, weapon) {
  
// }
// Enemy.prototype = Object.create(Character.prototype);

//   Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
//   };

module.exports = Enemy;