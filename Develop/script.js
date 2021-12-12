// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "D", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wantNumArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// declare variables for user criteria selection
var passwordLength;
var lowerCase;
var upperCase;
var wantNum;
var specialChar;

// function for user criteria password option selections
function promptMe() {
    //welcome 
    var myUserApp = prompt("Hi! Welcome to NF-GP-01 app. We'd love to create your Secure Password! Please write you name to start the myApp.", "Type your name here");
    if (myUserApp === "") {
        alert("Please type your name");
        return promptMe();
    } else if (myUserApp != null || myUserApp.length != 0) {
        alert("Hi " + myUserApp + ", Thank you for using myApp");
        return passwordChar();
    } else {
        alert("Sorry to let you go!");
    }
}

function passwordChar() {
    //ask the password length between 8 to 128
    passwordLength = prompt("How many charactors do you want your password to be?");
    //set password length if match with condition, keep asking to confirm criteria if no alert to user to be match criteria
    if (passwordLength >= 8 && passwordLength <= 128) {
        lowerCase = confirm("Do you want your password include a LOWERCASE letter?");
        upperCase = confirm("Do you want your password include a UPPERCASE letter?");
        numeric = confirm("Do you want your password include a NUMERIC letter?");
        specialChar = confirm("Do you want your password include a SPECIAL CHARACTOR letter?");

        if (lowerCase || upperCase || numeric || specialChar) {
            generatePassword();
            // if no for all, alert that must select one type
        } else {
            alert("Please select at least one criteria to generate password!");
            // return passwordChar();
        }
        // alert if password length is not between 8 to 128
    } else {
        alert("Password length must be between 8 to 128!");
        // return passwordChar();
    }
}


function generatePassword() {
    var password = "";
    var passwordArray = [];
    //generate password after user criterias have been selected
    if (lowerCase == true) {
        password += lowerCaseArray[getRandomInt(lowerCaseArray.length)];
        passwordArray = passwordArray.concat(lowerCaseArray);
    }
    if (upperCase == true) {
        password += upperCaseArray[getRandomInt(upperCaseArray.length)];
        passwordArray = passwordArray.concat(upperCaseArray);
    }

    if (wantNum == true) {
        password += wantNumArray[getRandomInt(wantNumArray.length)];
        passwordArray = passwordArray.concat(wantNumArray);
    }

    if (specialChar == true) {
        var randomIndex = getRandomInt(specialCharArray.length);
        password += specialCharArray[randomIndex];
        passwordArray = passwordArray.concat(specialCharArray);
    }

    var currentLength = password.length;
    var i;

    for (i = currentLength; i < passwordLength; i++) {
        password = password + passwordArray[getRandomInt(passwordArray.length)];
    }

    // Write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}





// function to generate random selection from the arrays
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// function to run everything when generate password button is clicked
function writePassword() {
    promptMe();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);