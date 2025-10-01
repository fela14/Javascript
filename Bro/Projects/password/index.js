// RANDOM PASSWORD GENERATOR

function generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolcaseChars = "!@#$%^&*()_+=-[]{}|:;'<,>.?/~`"

    let allowedChars = ''
    let password = ''

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolcaseChars : ""

    console.log(allowedChars)

    if (passwordLength <= 0) {
        return `(password length must be atleast 1)`;
    }

    if (allowedChars === 0) {
        return '(atleast one set of characters must be selected)'
    }

    for (i = 0; i <= passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols)
console.log(`Generated Password: ${password}`)