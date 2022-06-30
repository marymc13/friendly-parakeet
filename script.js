var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '#','$','%','&','*','<','>','/','=','?','+',];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//generate password based on prompts
var password = "";
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
return password;

}
  function getPrompts() {
    //Reset 
    choiceArr = [];
    // Prompt the user for password criteria
      
    characterLength = parseInt(prompt("How many characters do you want your password to be? Choose between 8 and 128 characters."));
     if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number between 8 and 128.");
      return false;
     }

     if(confirm("Would you like lowercase letters in your password?")){
      choiceArr = choiceArr.concat(lowerCassArr);
     }
     if(confirm("Would you like uppercase letters in your password?")){
      choiceArr = choiceArr.concat(upperCassArr);
     }
     if(confirm("Would you like special characters in your password?")){
      choiceArr = choiceArr.concat(specialCharArr);
     } 
     if(confirm("Would you like numbers in your password?")){
      choiceArr = choiceArr.concat(numberArr);
     }
     return true;

  }
  
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
// Validate the input
  if(correctPrompts) {
    var newPassword = generatePassword();
    var passwordTest = document.querySelector("#password");
     
       passwordTest.value = newPassword;
  }
  else {
    passwordTest.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
