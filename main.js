// KATA 1
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0,0,0,1]));
console.log(binaryArrayToNumber([0,0,1,0]));
console.log(binaryArrayToNumber([1,1,1,1]));
console.log(binaryArrayToNumber([0,1,1,0]));

// KATA 2 
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(a) {
  return a.indexOf(a.concat().sort((a, b) => { return a - b })[1]);
}

console.log(gimme([2, 3, 1]));

// KATA 3
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  let wolfIndex = queue.indexOf('wolf');
  let length = queue.length;
  if (wolfIndex === queue.length - 1) {
    return `Pls go away and stop eating my sheep`;
  } else {
    for (let i = 0; i < queue.length; i++) {
      let el = queue[i];
      if (el === 'wolf') {
        return `Oi! Sheep number ${length - (i + 1)}! You are about to be eaten by a wolf!`;  
      }
    }
  } 
}

console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep","wolf", "sheep","sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));

// KATA 4
// https://www.codewars.com/kata/586c1cf4b98de0399300001d
function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}

console.log(combat(100,5));
console.log(combat(92,8));
console.log(combat(20,30));

// KATA 5
// https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
