// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

function generatePassword() {
  
  // Variable that will eventually become the password generated
  var passwordGenerated = "";

  // Available characters for use in the password
  var numbers = "1234567890";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_+";
  
  // Variable used to compile characters 
  var usedCharacters = "";

  // Prompts user to input a number 8-128 for password length
  var pwLength = prompt(
    "How many characters would you like in your password? \n(Input a number between 8-128)"
  );

  // failsafe in the case the user does not input a number 8-128
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Please input a number between 8-128.")
  }

  // If confirmed, numbers will be added to the pool of characters for the password generated
  var useNumbers = confirm(
    "Would you like to include numbers?"
  );
  
  if (useNumbers) {
    usedCharacters = usedCharacters.concat(numbers);
  }

  // If confirmed, lowercase letters will be added to the pool of characters for the password generated
  var useLowerCase = confirm(
  "Would you like to include lowercase characters?"
  );

  if (useLowerCase) {
    usedCharacters = usedCharacters.concat(lowerCase);
  }

  // If confirmed, uppercase letters will be added to the pool of characters for the password generated
  var useUpperCase = confirm(
  "Would you like to include uppercase chracters?"
  );

  if (useUpperCase) {
  usedCharacters = usedCharacters.concat(upperCase);
  }

  // If confirmed, special characters will be added to the pool of characteres for the password generated
  var useSpecials = confirm(
  "Would you like to include special characters?"
  );

  if (useSpecials) {
  usedCharacters = usedCharacters.concat(specialCharacters);
  }

  // Takes the selected possible characters used and randomizes
  for (var i = 0; i < pwLength; i++) {

  var random = Math.floor(Math.random() * usedCharacters.length);
  passwordGenerated = passwordGenerated.concat(usedCharacters.charAt(random));
  }

// Optional alert 
// alert("Thank you, click ok to see your password");

// Generates the password
return passwordGenerated;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
