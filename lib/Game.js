//Inquirer package to collect user input,  as well.
const inquirer = require('inquirer');
//need to import and give Game function access to Enemy and Player objects
const Enemy = require('./Enemy');
const Player = require('./Player');
//game constructor function
function Game() {
    //callbacks for constructor function
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
    
}




Game.prototype.initializeGame = function() {
    
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    
    this.currentEnemy = this.enemies[0];

    inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    this.startNewBattle();
  });
};
//The startNewBattle() method will be called to kick off 
//the first battle and then called again anytime a new round 
//starts. We want this method to do the following things:
//Establish who will take their turn first based on their agility values.
//Display the Player object's stats.
//Display the description of the current Enemy.

Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    console.log(this.currentEnemy.getDescription());
    this.battle()
  };

  Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
  inquirer
//   //We're using the inquirer package's type: 'list' option to display a list of choices, where the user must either select 'Attack' or 'Use potion':

// If the user selects 'Use potion', it will require a follow-up prompt, which we'll write in a moment.

// If the user selects 'Attack', we'll reduce the Enemy health using the same methods as before.
    .prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: ['Attack', 'Use potion']
    })
    .then(({ action }) => {
        //If use potion is selected
        //If the inventory is empty,
        //return message that they have no potions,
        //if not empty, 
        //then the code following the if statement will execute. 
        
        if (action === 'Use potion') {
            if (!this.player.getInventory()) {
              console.log("You don't have any potions!");
              return this.checkEndOfBattle();
            }
          //In this case, it will prompt the user for a specific 
        //Potion selection.
        inquirer
        .prompt({
          type: 'list',
          message: 'Which potion would you like to use?',
          name: 'action',
          choices: this.player.
            getInventory()
            .map((item, index) => `${index + 1}: ${item.name}`)
        })
        .then(({ action }) => {
          const potionDetails = action.split(': ');
      
          this.player.usePotion(potionDetails[0] - 1);
          console.log(`You used a ${potionDetails[1]} potion.`);

          this.checkEndOfBattle();
        });
          } else {
        const damage = this.player.getAttackValue();
        this.currentEnemy.reduceHealth(damage);

        console.log(`You attacked the ${this.currentEnemy.name}`);
        console.log(this.currentEnemy.getHealth());

        this.checkEndOfBattle();
      }
    });
} else {
      const damage = this.currentEnemy.getAttackValue();
      this.player.reduceHealth(damage);

      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());

      this.checkEndOfBattle();
    }

  };

  Game.prototype.checkEndOfBattle = function() {
      //Our checkEndOfBattle() logic should first verify if both characters are alive and can continue fighting. If so, we should switch the turn order and run battle() again.
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.battle();

      } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
        console.log(`You've defeated the ${this.currentEnemy.name}`);
      
        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);
      
        this.roundNumber++;
      
        if (this.roundNumber < this.enemies.length) {
          this.currentEnemy = this.enemies[this.roundNumber];
          this.startNewBattle();
        } else {
          console.log('You win!');
        }
      
    } else {
        console.log("You've been defeated!");
      }
};

module.exports = Game;