var Word = require("./word.js");


var Game = function(){
	this.chosenWords = ["timberwolves","vikings","twins","wild","lynx","gophers","saints", "swarm", "united"];

	this.randomWord = this.chosenWords[ Math.floor(Math.random() * this.chosenWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	//console.log(hangMan.randomWord);

module.exports = Game;