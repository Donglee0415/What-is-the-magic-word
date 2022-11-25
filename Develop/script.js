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
    
    //user confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var genCharacter = confirm("Do you want to use special characters? ");
    var genNumeric = confirm("Do you want to use number?");
    var genLowerCase = confirm("Do you want to use Lowercase?");
    var genUpperCase = confirm("Do you want to use Uppercase?");



  }
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
