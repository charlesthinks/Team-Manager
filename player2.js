function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}
Player.prototype.printInfo = function () {
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
var goodGame = function () {
    var coinFlip = Math.floor(Math.random() * 2);
    // var number = Math.floor(Math.random()* 10)
    if (coinFlip === 1) {
        this.offense++;
    } else {
        this.defense++;
    }
};
var badGame = function () {
    var coinFlipTwo = Math.floor(Math.random() * 2);
    if (coinFlipTwo === 0) {
        this.defense--;
    } else {
        this.offense--;
    }
};


var inquirer = require("inquirer");



var playerCount = 0;
// array in which we will store each of our new PLayer objects
var playerArray = [];

var askQuestion = function () {
    // if statement to ensure that our questions are only asked three times
    if (playerCount < 3) {
        console.log("NEW PLAYER");
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your Players name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your Players position?",
                    name: "position"
                },
                {
                    type: "input",
                    message: "What is your Players offense?",
                    name: "offense"
                },
                {
                    type: "input",
                    message: "What is your Players defense?",
                    name: "defense"
                },

            ]).then(function (answers) {

                var newPlayer = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.language);

                playerArray.push(newPlayer);

                playerCount++;

                askQuestion();
            });
    }