/*

console.log(`Hello`);
console.log(`i like pizza`);

window.alert(`This is an alert`);
window.alert(`i like pizza`);

document.getElementById("myH1").textContent = `Hello`
document.getElementById("myH2").textContent = `I like pizza`

let x;
x = 123;

console.log(x)

// number 
let age = 25;
let price = 10.99;
let gpa = 2.1;

// string
let firstName = "Bro"
let favoriteFood = "pizza"
let email = "fake123@example.com"

//boolean
let online = true;
let forSale = false;



console.log(typeof gpa)
console.log(`You are ${age} years old`)
console.log(`The price is ${price}`)
console.log(`Your gpa is ${gpa}`)

console.log(typeof firstname)
console.log(`Your firstname is ${firstName}`)
console.log(`if your favorite food is ${favoriteFood}`)
console.log(`Then your email is ${email}`)

console.log(`Bro is online: ${online}`)
console.log(`Is this car for sale: ${forSale}`)

let fullName = "Bro Code";
let age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`
document.getElementById("p2").textContent = `You are ${age}`
document.getElementById("p3").textContent = `Are you a student: ${student}`

let student = 30;

// student = student + 1
// student = student - 1
// student = student * 2
// student = student / 2
// student = student ** 2
// let extraStudent = student % 7

// student += 1
// student -= 1
// student *= 2
// student /= 2
// student **= 2
// student %= 2

// student++
// student--

// console.log(extraStudent)
// console.log(student)

let result = 12 % 5 + 8 / 2
console.log(result)

// easy way
let username;
username = window.prompt("What's your username")
console.log(username)

let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("h3").textContent = `Hello ${username}`
}

let age = window.prompt(`How old are you?`)
age = Number(age)
age += 1
console.log(age)

let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

let radius;
const PI = 3.14;
let circumference;

PI = 100

radius = window.prompt("Enter the radius:")
radius = Number(radius)

circumference = 2 * PI * radius
console.log(circumference)

let radius;
const PI = 3.14;
let circumference;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = 2 * PI * radius

    document.getElementById("myH3").textContent = circumference + "cm";
}

console.log(Math.pi)

let x = 2.99;
let y = 5.34;
let z;

let a = 81;
let b = -66;

// x = Math.round(x)
// x = Math.floor(x)
// x = Math.ceil(x)

console.log(x)

y = Math.trunc(y)
console.log(y)

// z = Math.pow(x, y)
// z = Math.sign(x)
console.log(z)

// a = Math.sqrt(a)
// a = Math.log(a)
// a = Math.sin(a)
// a = Math.cos(a)
// a = Math.tan(a)

console.log(a)

b = Math.abs(b)
console.log(b)


let r = 1;
let s = 2;
let t = 3;

let max = Math.max(r, s, t)
let min = Math.min(r, s, t)
console.log(max)
console.log(min)

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum)

let min = 50
let max = 100
let rNum = Math.floor(Math.random() * (max - min)) + min;
console.log(rNum)

let age = 10

if (age >= 18) {
    console.log("You are old enough to enter this site")
}
else {
    console.log("You aren't old enough to enter this site")
}
    
let time = 14
if (time < 12) {
    console.log("Good morning!")
}
else {
    console.log("Good afternoon")
}

let isStudent = false;

if (isStudent) {
    console.log("You are a student")
}
else {
    console.log("You are NOT a student")
}

let age = 25;
let hasLicence = true;

if (age >= 16) {
    console.log("You are old enough to drive")
    if (hasLicence) {
        console.log("You have your licence")
    }
    else {
        console.log("You do not have your licence")
    }
}
else {
    console.log("You must be 16+ to have a license")
}

let age = 0

if (age >= 100) {
    console.log("You are TOO old to enter this site")
}
else if (age == 0) {
    console.log("You can't enter, you were just born")
}
else if (age >= 18) {
    console.log("You are old enough to enter this site")
}
else if (age < 0) {
    console.log("Your age can't be below 0")
}
else {
    console.log("You must be 18+ to enter this site")
}

const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age)

    if (age >= 100) {
        resultElement.textContent = "You are TOO old to enter this site"
    }
    else if (age == 0) {
        resultElement.textContent = "You can't enter, you were just born"
    }
    else if (age >= 18) {
        resultElement.textContent = "You are old enough to enter this site"
    }
    else if (age < 0) {
        resultElement.textContent = "Your age can't be below 0"
    }
    else {
        resultElement.textContent = "You must be 18+ to enter this site"
    }    
}

const myCheckBox = document.getElementById(myCheckBox);
const visaBtn = document.getElementById(visaBtn);
const masterCardBtn = document.getElementById(masterCardBtn);
const payPalBtn = document.getElementById(payPalBtn);
const mySubmit = document.getElementById(mySubmit);
const subResult = document.getElementById(subResult);
const paymentResult = document.getElementById(paymentResult);

mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed`;
    }
    else {
        subResult.textContent = `You are NOT subscribed`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else{
        paymentResult.textContent = `You m`;
    }
    payPalBtn

}

let age = 10;

let message1 = age >= 10 ? "You are an adult" : "You are a minor"
console.log(message1)

let time = 9;

let greeting = time < 12 ? "Good morning" : "Good afternoon"
console.log(greeting)

let isStudent = false;

let message2 = isStudent ? "You are a student" : "You are NOT a student"
console.log(message2)

let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

let day = "pizza";

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday")
        break;
    case 3:
        console.log("It is Wednesday")
        break;
    case 4:
        console.log("It is Thursday")
        break;
    case 5:
        console.log("It is Friday")
        break;
    case 6:
        console.log("It is Saturday")
        break;
    case 7:
        console.log("It is Sunday")
        break;
    default:
        console.log(`${day} is not a day`)
}

let testScore = 70
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break
    case testScore >= 80:
        letterGrade = "B";
        break
    case testScore >= 70:
        letterGrade = "C";
        break
    case testScore >= 60:
        letterGrade = "D";
        break
    default:
        letterGrade = "F";
}
console.log(letterGrade);

let userName = "    Jeinkins    Javascript    "
console.log(userName.charAt(3))
console.log(userName.indexOf("i"))
console.log(userName.lastIndexOf("i"))
console.log(userName.length)
console.log(userName.trim())
console.log(userName.trim().toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.repeat(2))
console.log(userName.startsWith(" "))
console.log(userName.trim().startsWith(" "))

let result1 = userName.startsWith(" ")
if (result1) {
    console.log("Your username begins with ' '")
}
else {
    console.log(userName)
}
let result2 = userName.endsWith(" ")
if (result2) {
    console.log("Your username can't end with ' '")
}
else {
    console.log(userName)
}
let result3 = userName.includes(" ")
if (result3) {
    console.log("Your username can't include ' '")
}
else {
    console.log(userName)
}

let phoneNumber = '123-456-7890'
phoneNumber1 = phoneNumber.replaceAll("-", "*")
console.log(phoneNumber1)

phoneNumber2 = phoneNumber.padStart(20, "*")
console.log(phoneNumber2)

phoneNumber3 = phoneNumber.padEnd(20, "0")
console.log(phoneNumber3)

const fullName = "Bro Code"
let firstName = fullName.slice(0, 3)
console.log(firstName)
let lastName = fullName.slice(4, fullName.length)
console.log(lastName)

let firstChar = fullName.slice(0, 1)
console.log(firstChar)
let lastChar = fullName.slice(-1)
console.log(lastChar)

let first = fullName.slice(0, fullName.indexOf(" "))
console.log(first)

let last = fullName.slice(fullName.indexOf(" ") + 1)
console.log(last)

const email = "fake@example.com"
let user = email.slice(0, email.indexOf("@"))
console.log(user)
let ext = email.slice(email.indexOf("@") + 1)
console.log(ext)


// -----------No Method Chaining-------------
let username = window.prompt("Enter your username: ")
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1)
extraChars = extraChars.toLowerCase()

username = letter + extraChars
console.log(username)

// -----------With Method Chaining-------------
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)

// Logical Operators

const temp = 200
if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD")
}
else {
    console.log("The weather is BAD")
}
if (temp <= 0 || temp > 30) {
    console.log("The weather is GOOD")
}
else {
    console.log("The weather is BAD")
}

const isSunny = false;
if (!isSunny) {
    console.log("It is CLOUDY")
}
else {
    console.log("It is SUNNY")
}


const PI = 3.14
if (PI === "3.14") {
    console.log("That is PI")
}
else {
    console.log("That is NOT PI")
}

const pi = "3.14"
if (pi !== "3.14") {
    console.log("That is NOT PI")
}
else {
    console.log("That is PI")
}

let username = "";
while (username === "" || username == null) {
    username = window.prompt("You did not enter a username")
}
console.log(`Hello ${username}`)

let username;

do {
    username = window.prompt("You did not enter a username");
} while (username === "" || username === null);

console.log(`Hello ${username}`)

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username")
    password = window.prompt("Enter your password")

    if (username === "test" && password === "pass") {
        loggedIn = true
        console.log("You are logged in")
    }
    else {
        console.log("Invalid credentials.. Please try agin..")
    }
}

for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let x = 10; x > 0; x--) {
    console.log(x);
}
console.log("HAPPY NEW YEAR!!!")

for (let y = 1; y <= 20; y++) {
    if (y == 13) {
        continue;
    }
    else {
        console.log(y)
    }
}

for (let y = 1; y <= 20; y++) {
    if (y == 13) {
        break;
    }
    else {
        console.log(y)
    }
}

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
let attempts = 0
let guess;
let running = true;

while (running) {

    guess = window.prompt(`Enter a guess between ${minNum} and ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number")
    }
    else {
        attempts++
        if (guess > answer) {
            window.alert("Too high. Try again!")
        }
        else if (guess < answer) {
            window.alert("Too low. Try again!")
        }
        else {
            window.alert(`Correct! Answer is ${answer}. It took you ${attempts}`)
            running = false;
        }
    }
}

function happyBirthday(username, age) {
    console.log("Happy birthday to you")
    console.log(`${username} is ${age}`)
}
happyBirthday("Jenkins", 68);

function add(x, y) {
    let result = x + y
    return result
}

let answer = add(2, 3)
console.log(answer)

function isEven(number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isEven(12))

function isEve(number) {
    return number % 2 === 0 ? true : false;
}
console.log(isEve(13))

function isValidEmail(email) {
    if (email.includes("@")) {
        return true
    }
    else {
        return false
    }
}

console.log(isValidEmail("fake@example.com"))
console.log(isValidEmail("fakeexample.com"))
*/

function function1() {
    let x = 1
    console.log(x)
}

function function2() {
    let x = 2
    console.log(x)
}
let x = 3
function1()
function2()