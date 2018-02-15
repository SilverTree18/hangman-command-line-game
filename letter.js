
// shows either letter or _

var Letter = function(checkLetter){

	this.current = "_"
	this.theLetters = checkLetter;
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters; 
			return true;
		}
			return false;
	}
	this.letterShows = function(){
		return this.current;
	}
};

module.exports = Letter;
