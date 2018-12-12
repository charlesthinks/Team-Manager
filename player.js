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

// PUT INQUIRER HERE---------------------------





//

var score = 0;
var count = 0;
var input = process.argv[2];

var playGame = function(player1, player2){

    count++;

    var ran1 = Math.floor(Math.random() * 20) + 1;
    var ran2 = Math.floor(Math.random() * 20) + 1;

    if (ran1 < player1.offense + player2.offense){
        score++
    }
    if (ran2 > player2.defense + player2.defense){
        score--
    }

    if(count <= 4){
        prompt("Do you want to sub?");
        if(input === "yes"){
            prompt("Which player?");
            if('player1'){
                var temp = playerArray[2];
                playerArray[2] = playerArray[0];
                playerArray[0] = playerArray[2];
                playGame(playerArray[0], playerArray[1]);
            }
            else if('player2'){
                var temp = playerArray[2];
                playerArray[2] = playerArray[0];
                playerArray[0] = playerArray[2];
                playGame(playerArray[0], playerArray[1]);
            }
        }
        else{
            playGame(playerArray[0], playerArray[1]);
        }
    }else if(count === 5){
        if(score > 0){
           playerArray[0].goodGame();
           playerArray[1].goodGame();
           console.log("You Won!");
           console.log("Starter's status: " + player1.printStats() + player2.printStats());
        }else if(score < 0){
            playerArray[0].badGame();
            playerArray[1].badGame();
            console.log("You Lost!")
            console.log("Starter's status: " + player1.printStats() + player2.printStats());
        }else if(score === 0){
            console.log("Tie!");
            console.log("Starter's status: " + player1.printStats() + player2.printStats())
        }
        prompt("Do you want to play again?");
            if('yes'){
                score = 0;
                count = 0;
                playGame(player1, player2);
            }
            else{
                console.log("Game over!");
            }
    }
};