// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
 
// Click the button to generate the paddwords
generateBtn.addEventListener("click", function(){

  let charLength = prompt("How many characters? Pick a number between 8 to 128");

  if((charLength >= 8) && (charLength <= 128)){

    //all possible types user can type
    var character1 = "!@#$%^&*()[]{}~`:;?/><.,";
    var numeric = "0123456789";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let Password ="";
    
    //user confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var genCharacter = confirm("Do you want to use special characters? ");
    var genNumeric = confirm("Do you want to use number?");
    var genLowerCase = confirm("Do you want to use Lowercase?");
    var genUpperCase = confirm("Do you want to use Uppercase?");

    

    //make all combination
        var allCharacters = character1 + numeric + lowerCase + upperCase;
        var a = character1 + numeric + lowerCase;
        var b = character1 + numeric + upperCase;
        var c = character1 + lowerCase + upperCase;
        var d = character1 + lowerCase + upperCase;
        var e = character1 + numeric;
        var f = character1 + lowerCase;
        var g = character1 + upperCase;
        var h = numeric + lowerCase;
        var j = numeric + upperCase;
        var k = lowerCase + upperCase;

        //create if statements with for loops
        if ((genCharacter === true) && (genNumeric === true) && (genLowerCase === true) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * allCharacters.length);//which combination use
              Password += allCharacters.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === true) && (genNumeric === true) && (genLowerCase === true) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * a.length);
              Password += a.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === true) && (genNumeric === true) && (genLowerCase === false) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i ++) {
              let character = Math.floor(Math.random() * b.length);
              Password += b.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === true) && (genNumeric === false) && (genLowerCase === true) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * c.length);
              Password += c.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === false) && (genNumeric === true) && (genLowerCase === true) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * d.length);
              Password += d.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === true) && (genNumeric === true) && (genLowerCase === false) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * e.length);
              Password += e.charAt(character, character + 1);
          }
      }
      else if ((genCharacter=== true) && (genNumeric === false) && (genLowerCase === true) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * f.length);
              Password += f.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === true) && (genNumeric === false) && (genLowerCase === false) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * g.length);
              Password += g.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === false) && (genNumeric === true) && (genLowerCase === true) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * h.length);
              Password += h.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === false) && (genNumeric === true) && (genLowerCase === false) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * j.length);
              Password += j.charAt(character, character + 1);
          }
      }
      else if ((genCharacter === false) && (genNumeric === false) && (genLowerCase === true) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * k.length);
              Password += k.charAt(character, character + 1);
          }
      }
      //user want only characters for password
      else if ((genCharacter === true) && (genNumeric === false) && (genLowerCase === false) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * character1.length);
              Password += character1.charAt(character, character + 1);
          }
      }
      //user want only numbers for password
      else if ((genCharacter === false) && (genNumeric === true) && (genLowerCase === false) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * numeric.length);
              Password += numeric.charAt(character, character + 1);
          }
      }
      //user want only lowercases for password
      else if ((genCharacter === false) && (genNumeric === false) && (genLowerCase === true) && (genUpperCase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * lowerCase.length);
              Password += lowerCase.charAt(character, character + 1);
          }
      }
      //user want only uppercase for password
      else if ((genCharacter === false) && (genNumeric === false) && (genLowerCase === false) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * a.length);
              Password += a.charAt(character, character + 1);
          }
      }

      //show result in the webpage
      passwordText.textContent = Password;
  }
});








