//Write a Function That Passes Potion Creation

// function Potion(name) {
//     this.name = name;
  
//     if (this.name === 'health') {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 5 + 7);
//     }
//   }
  
//   module.exports = Potion;

//Notice that we replaced the function keyword with class and moved the name parameter into a nested constructor() method. The constructor() is necessary here, because we want to be able to supply an argument to the class (e.g., new Potion('health')). If the class wasn't intended to receive arguments, the constructor() could be omitted.
class Potion {
 constructor(name){
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  }
  
  module.exports = Potion;