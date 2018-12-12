function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
}
Player.prototype.printInfo = function() {
  console.log(
    "Name: " +
      this.name +
      "\nPosition: " +
      this.position +
      "\nOffense: " +
      this.offense +
      "\nDefence: " +
      this.defense
  );
};
var goodGame = function() {
  var coinFlip = Math.floor(Math.random() * 2);
  // var number = Math.floor(Math.random()* 10)
  if (coinFlip === 1) {
    this.offense++;
  } else {
    this.defense++;
  }
};
var badGame = function() {
  var coinFlipTwo = Math.floor(Math.random() * 2);
  if (coinFlipTwo === 0) {
    this.defense--;
  } else {
    this.offense--;
  }
};
