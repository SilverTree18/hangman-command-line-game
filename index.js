var inquirer = require("inquirer");
var letters = require("./letter.js");

var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 7;

	prompt.start(); 
	console.log("Minnesota Sports Teams Hangman Game");
	console.log("Guess a letter");
	GameBegin(userGuess);
		function GameBegin(guesses){
			console.log("Guesses remaining: " + guesses);
			if(hangmanGame.currentWord.compareWords() == true){
				console.log("<<<< You are a WINNER! >>>>");
				console.log("The correct word was: ", hangmanGame.randomWord);
				return;
			}

			if(guesses <= 0){
				console.log("<<<< Game Over! You Lost! >>>>");
				console.log(" The correct word was: ", hangmanGame.randomWord);
				return;
			}


		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}

		if(hangmanGame.currentWord.letterYes(result.theGuess) == false){
			guesses --;
		}
		GameBegin(guesses);

	});
}
