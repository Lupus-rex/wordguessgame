// function to make a string that will determine the spaces and the blanks//

function letter(value) {
  this.letter = value;
  this.guessed = false;

  this.tostring = function() {
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else {
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter;
      }
    }
  };

  this.guess = function(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  };
}

module.exports = letter;
