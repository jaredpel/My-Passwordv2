// Assignment Code

function generatePassword () {
  var lowercasea= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specials = ["!", "@", "#", "$", "%", "&", "*", "(", ")","?"];
  var selectedArray = [];

  var passwordLength = getPasswordLength();
  var charTypeSelected = false;
  //loop
  while (charTypeSelected == false) {
    var number = getChoice("number");
    var special = getChoice("special");
    var uppercase = getChoice("uppercase");
    var lowercase = getChoice("lowercase");
    if ((number) || (special) || (uppercase) || (lowercase)) {
      charTypeSelected = true;
    } else {
    window.alert("select charcter type")
  }
}


if (uppercase) {
  selectedArray = selectedArray.concat(numbers);
}
if (lowercase) {
  selectedArray = selectedArray.concat(specials);
}
if (special) {
  selectedArray = selectedArray.concat(uppercaseA);
}
if (number) {
  selectedArray = selectedArray.concat(lowercasea);
}
var passwordString = "";
for (var i =0; i < passwordLength; i++) {
  passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
}
return passwordString;
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter a number between 8 and 128: "));
    if (isNaN(userChoice)) {
      userChoice = 0;  
    }
  }
  return userChoice;
}
function getChoice(currentOption) {
  var userChoice = "a", 
  MessagePromt = "";
  var MessagePromt = ('would you like' .concat(currentOption));
  MessagePromt = MessagePromt.concat( 'Character (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(MessagePromt));
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
    return false;
   }
 }
}
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



