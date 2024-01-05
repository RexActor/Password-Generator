// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lengthOfPassword = 0;
var hasSpecial = false;
var hasNumeric = false;
var hasLower = false;
var hasUpperCase = false;

// Function to prompt user for password options
function getPasswordOptions() {
  lengthOfPassword = prompt("How many characters you want for your password?");

  if (parseInt(lengthOfPassword) < 8 || parseInt(lengthOfPassword) > 128) {
    lengthOfPassword = alert(
      "Length of Password should be at least 8 characters long and no more than 128 characters"
    );
    return;
  }

  hasLower = confirm("Do you want lower case characters in your password?");
  hasUpperCase = confirm("Do you want upper case characters in your password?");
  hasNumeric = confirm("Do you want Numbers in your password?");
  hasSpecial = confirm("Do you want Special Characters in your password?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length - 1);
  return randomIndex;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var charactersForPassword = [];

  if (hasLower) {
    charactersForPassword = charactersForPassword.concat(lowerCasedCharacters);
  }
  if (hasUpperCase) {
    charactersForPassword = charactersForPassword.concat(upperCasedCharacters);
  }
  if (hasSpecial) {
    charactersForPassword = charactersForPassword.concat(specialCharacters);
  }
  if (hasNumeric) {
    charactersForPassword = charactersForPassword.concat(numericCharacters);
  }
  if (charactersForPassword.length == 0) {
    return `Password can't be generated! Please select at least one character type when generating password`;
  }


  var generatedPassword = "";
  for (var i = 0; i < lengthOfPassword; i++) {
    generatedPassword +=
      charactersForPassword[getRandom(charactersForPassword)];
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
