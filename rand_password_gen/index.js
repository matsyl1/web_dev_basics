// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#¤%&=?@£$€";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return "(Password length must be > 0)";
    }
    if(allowedChars.length === 0){
        return "(At least one set of chars must be selected)";
    }

    for(let i = 0; i < length; i++){ // iterate over length at +1 increment
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password; // function returns password at end
};

// options for password generation
const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);