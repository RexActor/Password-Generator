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

//declaring some extra variables for checks and user input
var lengthOfPassword;
var hasSpecial = false;
var hasNumeric = false;
var hasLower = false;
var hasUpperCase = false;

//extra function for number check
function isNumber(number) {
  return !isNaN(parseInt(number));
}
// Function to prompt user for password options
function getPasswordOptions() {
  //asking for user to enter length of password and storing it in variable
  lengthOfPassword = prompt("How many characters you want for your password?");

  //checking if input is number. Until user don't input valid number prompt will loop
  while (!isNumber(lengthOfPassword)) {
    lengthOfPassword = prompt("Please enter valid number from 8 to 128");
  }

  //checking if length of the password is from 8 to 128 characters long. If not then prompt will be looped until user inputs correct value
  while (parseInt(lengthOfPassword) < 8 || parseInt(lengthOfPassword) > 128) {
    lengthOfPassword = prompt(
      "Length of Password should be at least 8 characters long and no more than 128 characters"
    );
  }

  //character selection confirmation windows
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

  //new array variable where all characters will be inserted if selected
  var charactersForPassword = [];

  //checks if lower case characters were selected. If were then add this array into `charactersForPassword` array
  if (hasLower) {
    charactersForPassword = charactersForPassword.concat(lowerCasedCharacters);
  }
  //checks if upper case characters were selected. If were then add this array into `charactersForPassword` array
  if (hasUpperCase) {
    charactersForPassword = charactersForPassword.concat(upperCasedCharacters);
  }
  //checks if special characters were selected. If were then add this array into `charactersForPassword` array
  if (hasSpecial) {
    charactersForPassword = charactersForPassword.concat(specialCharacters);
  }
  //checks if numbers were selected. If were then add this array into `charactersForPassword` array
  if (hasNumeric) {
    charactersForPassword = charactersForPassword.concat(numericCharacters);
  }

  //If there are no characters selected in prompt selections, then `charactersForPassword` array will be empty and we are unable to generate password.
  //  we are displaying in text fields that password can't be generated until selection is not made
  if (charactersForPassword.length == 0) {
    return `Password can't be generated! Please select at least one character type when generating password!`;
  }

  //if above check is not being triggered, then we are generating password from `charactersForPassword` array with user inputted password length value as `lengthOfPassword`

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
