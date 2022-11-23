// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My codes

// define variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar ="!@#$%^&*(){}[]=<>/,.";

// define prompts
var confirmLength = [];
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecialChar;

function generatePassword() {
  var confirmLength = prompt("Enter desired password length (between 8-128 characters");

  // If a number outside the parameter is entered
  while(confirmLength>=128 || confirmLength<=8){
    alert("Please input a number between 8-128!");
    var confirmLength = prompt("Enter desired password length (between 8-128 characters");
  };

  var confirmUpper = confirm("Would you like to include uppercase letters?");
  var confirmLower = confirm("Would you like to include lowercase letters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecialChar = confirm("Would you like to include special characters?");

  // If none of the criteria was picked
  while(confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecialChar === false) {
    alert("Please make sure to select OK to at least one of the criteria.");
    var confirmUpper = confirm("Would you like to include uppercase letters?");
    var confirmLower = confirm("Would you like to include lowercase letters?");
    var confirmNumber = confirm("Would you like to include numbers?");
    var confirmSpecialChar = confirm("Would you like to include special characters?");
  };


  // Confirming the criteria the user selected
 var confirmMessage = "You wanted a " + confirmLength + "-digit password, containing";
 
 if (confirmUpper){
  confirmMessage += " uppercase letters,"
 };

 if (confirmLower){
  confirmMessage += " lowercase letters,"
 };

 if (confirmNumber){
  confirmMessage += " numbers,"
 };

 if (confirmSpecialChar){
  confirmMessage += " special characters,"
 };

confirmMessage = confirmMessage.slice(0, -1) + '.';
 
 alert(confirmMessage);

//  Combining selected criteria
var  passwordParameter = [];

if (confirmUpper) {
  passwordParameter += uppercase
};

if (confirmLower) {
  passwordParameter += lowercase
};

if (confirmNumber) {
  passwordParameter += numbers
};

if (confirmSpecialChar) {
  passwordParameter += specialChar
};

// to generate random string
var randomCombo = [];

// The loop will run confirmLength times 
for (var i=0; i<confirmLength; i++) {
  randomCombo = randomCombo + passwordParameter[Math.floor(Math.random() * passwordParameter.length)]
}
return randomCombo;
}


// randomCombo += passwordParameter.charAt(Math.floor(Math.random() * passwordParameter.length));