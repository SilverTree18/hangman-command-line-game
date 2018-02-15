var Letter = require('./letter.js');

var Word = function(checkWord){

	this.checkWord = checkWord;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	this.grabLetters = function(){
		for(var i = 0; i <this.checkWord.length; i++){
			var newLetter = new Letter(this.checkWord[i]);
			this.guessedWord.push(newLetter);

		}
	}
	this.grabLetters();

	this.letterYes = function(guessLetter){
		for(var i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}

		var added = false;

		this.guesses.push(guessLetter);

		for(var i = 0; i <this.guessedWord.length;i++){

			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}

 	this.compareWords = function(){
 		for(var i = 0; i < this.checkWord.length; i++){

 			if(this.checkWord.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}
 
	this.display = function(){
		var emptyString = "";
			
		for(var i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
	
} 

module.exports = Word;
