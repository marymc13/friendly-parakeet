var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '#','$','%','&','*','<','>','/','=','?','+',];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button clicked.")
  function getPrompts() {
     characterLength = parseInt(prompt("How many characters do you want your password to be? Choose between 8 and 128 characters."));
     if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number between 8 and 128.");
      return false;
     }
     if(confirm("Would you like lowercase letters in your password?")){
      choiceArr = choiceArr.concat(lowerCassArr);
     }
  }
  //1. Prompt the user for password criteria
     //a. password length between 8 < 128  

      //b. lowercase, uppercase, numbers, special characters
  //2. Validate the input
  //3.Generate password based on criteria
  //4. Display generated password on the page
  return "generated password will go here";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
