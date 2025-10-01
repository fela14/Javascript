/* console.log(`Hello`);
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

let fruits = ['apple', 'orange', 'banana']
fruits[3] = 'coconut'
console.log(fruits)
console.log(fruits[0])

fruits.pop(); // remove the last item
fruits.push("pear") // add to the end
fruits.unshift('pineapple') // add to the beinning
fruits.shift(); // remive the first item

let numOfFruits = fruits.length;
let Index = fruits.indexOf("banana")
console.log(numOfFruits)
console.log(Index)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let i = fruits.length - 1; i <= 0; i--) {
    console.log(fruits[i]);
}

console.log(fruits.sort());
console.log(fruits.sort().reverse());

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, "#"]]

for (let row of matrix) {
    console.log(row);
}

matrix[0][0] = 'x'
matrix[0][1] = 'o'
matrix[0][2] = 'x'

matrix[1][0] = 'o'
matrix[1][1] = 'x'
matrix[1][2] = 'o'

matrix[2][0] = 'x'
matrix[2][1] = 'o'
matrix[2][2] = 'x'

for (let row of matrix) {
    const rowString = row.join(" ")
    console.log(rowString);
}

let number = [1, 2, 3, 4, 5]
let maximum = Math.max(number)
let minimum = Math.min(...number)
let max = Math.max(...number)
console.log(maximum)
console.log(max)
console.log(minimum)

let username = "Javascript"
console.log([...username])
console.log([...username].join('-'))

let fruits = ['banana', 'apple', 'pear']
let vegetables = ['carrot', 'celery', 'potatoes']

let newFruit = [...fruits];
console.log(newFruit)

let foods = [...fruits, ...vegetables, "eggs", "milk"]
console.log(foods)

function openFridge(...foods) {
    console.log(foods)
}

function getFood(...foods) {
    return foods
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
const food6 = "shawarma";

openFridge(...food1, ...food2, ...food3, ...food4, ...food5, ...food6,)
const Foods = getFood(...food1, ...food2, ...food3, ...food4, ...food5, ...food6,)
console.log(Foods)

function sum(...numbers) {
    result = 0;
    for (let number of numbers) {
        result += number
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 6)
console.log(`Your total is $${total}`)

function getAverage(...numbers) {
    result = 0
    for (let number of numbers) {
        result += number
    }
    return result / numbers.length
}
const average = getAverage(1, 2, 3, 4, 5, 6)
console.log(`Your average is ${average}`)

function combineStrings(...strings) {
    return strings.join(' ')
}

const fullName = combineStrings("Mr", "Spongebob", "Squarepants", "III")
console.log(fullName)

function hello(callback) {
    console.log("Hello")
    callback()
}

function goodbye() {
    console.log("Goodbye")
}

function wait() {
    console.log("Wait")
}

function leave() {
    console.log("Leave")
}

hello(wait)

function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function printConsole(result) {
    console.log(result)
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result
}

sum(displayPage, 5, 10)

let numbers = [1, 2, 3, 4, 5]

function display(element) {
    console.log(element)
}

function double(element, index, array) {
    array[index] = element * 2
}

function power(element, index, array) {
    array[index] = Math.pow(element, 2)
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3)
}

//numbers.forEach(power)
//numbers.forEach(double)
numbers.forEach(cube)
numbers.forEach(display)

let fruits = ["APPle", "ORAnge", "BANana", "COConut"]

function display(element) {
    console.log(element)
}

function upper(element, index, array) {
    array[index] = element.toUpperCase()
}

function lower(element, index, array) {
    array[index] = element.toLowerCase()
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

fruits.forEach(capitalize)
fruits.forEach(display)

const number = [1, 2, 3, 4, 5]
const squares = number.map(square)
const cubes = number.map(cube)

console.log(squares)
console.log(cubes)

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}



const student = ["Spongebob", "Patrick", "Squidward", "Sandy"]
const studentsUpper = student.map(upperCase)
const studentsLower = student.map(lowerCase)

console.log(studentsUpper)
console.log(studentsLower)

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2024-2-20", "2024-3-30", "2024-4-31"]
const newFormat = dates.map(formatDates)

console.log(newFormat)

function formatDates(element) {
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

// .filter()

let numbers = [1, 2, 3, 4, 5, 6, 7]
let evenDates = numbers.filter(isEven)
let evenOdd = numbers.filter(isOdd)

console.log(evenDates)
console.log(evenOdd)

function isEven(element) {
    return element % 2 === 0
}

function isOdd(element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60]
const adults = ages.filter(isAdult)

console.log(adults)

function isAdult(element) {
    return element >= 18
}

const words = ["apple", "orange", "banana", "kiwi",
    "pomegranate", "coconut"]
const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(shortWords)
console.log(longWords)

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}

// .reduce()

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum)

console.log(total)

function sum(accumulator, element) {
    return accumulator + element
}

const grades = [75, 50, 90, 65, 95]
const maximum = grades.reduce(getMax)
const minimum = grades.reduce(getMin)

console.log(maximum)
console.log(minimum)

function getMax(accumulator, element) {
    return Math.max(accumulator, element)
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element)
}

// function expression

const hello = function () {
    console.log("Hello")
}
hello()

setTimeout(hello, 3000)
setTimeout(function () {
    console.log("hello world")
}, 3000)

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
})
const cubes = numbers.map(function cube(element) {
    return Math.pow(element, 3);
})
const evenNums = numbers.filter(function (element) {
    return element % 2 === 0
})
const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0
})
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element
})

console.log(squares)
console.log(cubes)
console.log(evenNums)
console.log(oddNums)
console.log(total)

// arrow functions

const greet = () => console.log("Hello")
greet();

const hello = (name, age) => {
    console.log(`Hello ${name}.`)
    console.log(`You are ${age} years old`)
}
hello("world", 24);

setTimeout(function hi() {
    console.log("Hi")
}, 3000)

setTimeout(() => console.log("Hello"), 3000)

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map((element) => Math.pow(element, 2))
const cubes = numbers.map((element) => Math.pow(element, 3))
const evenNum = numbers.filter((element) => element % 2 === 0)
const oddNum = numbers.filter((element) => element % 2 !== 0)
const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(squares)
console.log(cubes)
console.log(evenNum)
console.log(oddNum)
console.log(total)

// object

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () { console.log("Hello bro") },
    sayCheese: () => console.log("Happy Graduation")
}
const person2 = {
    firstName: "Kendrick",
    lastName: "Lamar",
    age: 40,
    isEmployed: false,
    sayHello: function () { console.log("Hello world") },
    sayCheese: () => console.log("Happy Bithday")
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
console.log(person1.sayHello())
console.log(person1.sayCheese())

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)
console.log(person2.sayHello())
console.log(person2.sayCheese())

// this

person3 = {
    name: "Ada",
    age: 18,
    favFood: "Pizza",
    sayHello: function () { console.log(`Hi! I am ${this.name}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) }
}

person3.sayHello()
person3.eat()

// constructor

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color
    this.drive = function () { console.log(`You drive a ${this.model}`) }
}
const car1 = new Car("Ford", "Mustang", 2024, "red")
const car2 = new Car("Mercedes", "w123", 1982, "white")

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car1.drive())

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
console.log(car2.drive())

// class

class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
    displayProduct() {
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    calculatetotal(salesTax) {
        let total = this.price + (this.price * salesTax)
        return console.log(`Total price (with tax): $${total.toFixed(2)}`)
    }

}

const product1 = new Product('bag', 20.99)
const product2 = new Product('spoon', 11.99)
const product3 = new Product('panties', 100)

const salesTax = 0.05

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

product1.calculatetotal(salesTax)

class MathUtil {
    static PI = 3.14159;
    static getDiameter(radius) {
        return radius * 2
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius
    }
    static getArea(radius) {
        return this.PI * radius * radius
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))

class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    sayHello() {
        console.log(`Hello, my username is ${this.username}`)
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`)
    }
}
const user1 = new User("Bob")
const user2 = new User("Sandy")
const user3 = new User("Franklin")
const user4 = new User("Michael")
const user5 = new User("Doro")

console.log(user1.username)
console.log(user2.sayHello())
console.log(User.userCount)
console.log(User.getUserCount())

// inheritance

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal {
    name = "rabbit"
    run() {
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal {
    name = "fish"
    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal {
    name = "hawk"
    fly() {
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit1 = new Rabbit
const fish1 = new Fish
const haw1 = new Hawk
rabbit1.sleep()
console.log(rabbit1.alive)
rabbit1.alive = false
console.log(rabbit1.alive)
rabbit1.run()
fish1.swim()
haw1.fly()

// super

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`This ${this.name} moves at ${speed}km/h`)
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed
    }
    swim() {
        console.log(`This ${this.name} can swim`)
        super.move(this.swimspeed)
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed
    }
    fly() {
        console.log(`This ${this.name} can swim`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit('bunny', 3, 25)
const fish = new Fish('fish', 1, 34)
const hawk = new Hawk('hawk', 2, 56)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
console.log(fish.name)
console.log(fish.age)
console.log(fish.swimSpeed)
console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.flySpeed)
rabbit.run()
fish.swim()
hawk.fly()

// getters and setters

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width cannot be a negative value")
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive integer")
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`
    }

    get height() {
        return `${this._height.toFixed(1)}cm`
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm^2`
    }
}
const rect = new Rectangle(10, 20)
rect.width = 40
rect.height = 30
console.log(rect.width)
console.log(rect.height)
console.log(rect.area)

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error(`Firstname must be a non-empty string`)
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error(`Lastname must be a non-empty string`)
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge
        }
        else {
            console.error("Age must ne a non-negative number")
        }
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get fullName() {
        return this._firstName + " " + this._lastName
    }
}
const person = new Person("Spongebob", "Squarepants", 7)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
console.log(person.age)

// destructuring

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a)
console.log(b)

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors)

const [firstColor, secondColor, thirdColor, ...extraColors] = colors
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

const person1 = {
    firstName: "Hello",
    lastName: "world",
    age: 30,
    job: "Fry Cook"
}
const person2 = {
    firstName: "Hey",
    lastName: "you",
    age: 40,
}
const { firstName, lastName, age, job = "unemployed" } = person2
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Age: ${age}`)
    console.log(`Job: ${job}`)
}
const person3 = {
    firstName: "Hello",
    lastName: "world",
    age: 30,
    job: "Fry Cook"
}
const person4 = {
    firstName: "Hey",
    lastName: "you",
    age: 40,
}

displayPerson(person3)
displayPerson(person4)

// nested objects

const person = {
    fullName: "Spongebob Squarepants",
    age: "30",
    isStudent: true,
    hobbies: ["karate, jellyfishing", "cooking"],
    address: {
        street: "123 Hello str.",
        city: "Ok",
        country: "USA",
        houses: ["big", "small", "tall", "short"]
    }
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies[1])
console.log(person.address.city)
console.log(person.address.houses[2])

for (const property in person.address) {
    console.log(person.address[property])
}

class Pers {
    constructor(name, age, ...address) {
        this.name = name
        this.age = age
        this.address = new Address(...address)
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street
        this.city = city
        this.country = country
    }
}

pers1 = new Pers("Spongebob", 30, "124 Conch St.",
    " Bikini Bottom",
    "Int. Waters");
pers2 = new Pers("Patrick", 34, "128 Conch St.",
    " Bikini Bottom",
    "Int. Waters");
pers3 = new Pers("John", 34, "130 Conch St.",
    " Bikini Bottom",
    "Int. Waters");
console.log(pers1)
console.log(pers2)
console.log(pers3)
console.log(pers1.address.country)
console.log(pers1.address.street)

// Array of objects

const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 100 },
{ name: "banana", color: "yellow", calories: 129 },
{ name: "coconut", color: "white", calories: 149 },
{ name: "pineapple", color: "yellow", calories: 19 }
];
console.log(fruits[0].name)
console.log(fruits.push({ name: "grape", color: "red", calories: 55 }))
console.log(fruits)
console.log(fruits.pop)
console.log(fruits.splice(1, 2))

// ---------forEach()

fruits.forEach(fruit => console.log(fruit.name))
fruits.forEach(fruit => console.log(fruit.color))

// ---------map()

const fruitNames = fruits.map(fruit => fruit.name)
const fruitColors = fruits.map(fruit => fruit.color)
const fruitCalories = fruits.map(fruit => fruit.calories)
console.log(fruitNames)
console.log(fruitColors)
console.log(fruitCalories)

// ---------filter()
const yellowFruits = fruits.filter(fruit => fruit.color == 'yellow')
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)
console.log(yellowFruits)
console.log(lowCalFruits)
console.log(highCalFruits)

// ---------reduce()
const maxFruit = fruits.reduce((max, fruit) =>
    fruits.calories > max.calories ?
        fruit : max)

const minFruit = fruits.reduce((min, fruit) =>
    fruit.calories < min.calories ?
        fruit : min)
console.log(maxFruit)
console.log(minFruit)

// sort
let words = ["hello", "wadup", "morning"]
words.sort()
console.log(words)

let numbers = [4, 2, 5, 3, 1, 10, 7, 6, 8, 9]
numbers.sort((a, b) => a - b)
console.log(numbers)
numbers.sort((a, b) => b - a)
console.log(numbers)

const people = [{ name: "Spongebob", age: 30, gpa: 3.0 },
{ name: "Patrick", age: 7, gpa: 3.5 },
{ name: "Squidward", age: 51, gpa: 2.5 },
{ name: "Sandy", age: 27, gpa: 4.0 }]
people.sort((a, b) => a.age - b.age)
console.log(people)
people.sort((a, b) => b.gpa - a.gpa)
console.log(people)
people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people)
people.sort((a, b) => b.name.localeCompare(a.name))
console.log(people)

// Shuffle an array -> Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]
    }
}

// date object

const date1 = new Date()
console.log(date1)
// Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(2024, 0, 1, 2, 3, 4, 5)
console.log(date2)
const date3 = new Date("2025-04-20T12:00:00");
console.log(date3)
const date4 = new Date(0)
console.log(date4)
const date5 = new Date(1759180000000)
console.log(date5)
const date6 = new Date()
console.log(date6)
const year = date6.getFullYear();
const month = date6.getMonth();
const day = date6.getDate();
const hour = date6.getHours();
const minutes = date6.getMinutes();
const seconds = date6.getSeconds();
const dayOfWeek = date6.getDay();
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(dayOfWeek)
const date7 = new Date();
date7.setFullYear(2026)
date7.setMonth(0)
date7.setDate(1)
date7.setHours(2)
date7.setMinutes(3);
console.log(date7)

const dateA = new Date("2023-12-31");
const dateB = new Date("2026-01-01")
if (dateB > dateA) {
    console.log("Happy New Year!")
}
*/

// closure

function outer() {
    let message = "Hello"
    function inner() {
        console.log(message)
    }
    inner();
}
outer()

function createCounter() {
    let count = 0;
    function increment() {
        count++
        console.log(`Count increased to ${count}`);
    }
    function getCount() {
        return count;
    }
    return { increment, getCount }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)

function createGame() {
    let score = 0
    function increaseScore(points) {
        score += points
        console.log(`+${points}pts`)
    }
    function decreaseScore(points) {
        score -= points
        console.log(`-${points}pts`)
    }
    function getScore() {
        return score;
    }
    return { increaseScore, decreaseScore, getScore }
}
const game = createGame()
game.increaseScore(5)
game.increaseScore(6)
game.decreaseScore(3)
console.log(`The final score is ${game.getScore()}pts`)

// setTimeout()

// function sayHello() {
//     window.alert("Hello")
// }
// setTimeout(sayHello, 3000)
// setTimeout(function () { window.alert("Holla") }, 2000)
// setTimeout(() => window.alert("Hi"), 2000)

// const timeoutId = setTimeout(() => window.alert("Hello world"), 2000)
// clearTimeout(timeoutId);

let timeoutId
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000)
    console.log("STARTED")
}
function clearTimer() {
    console.log("CLEARED")
}

// console.time()

console.time("test")
for (let i = 0; i < 1000000; i++) {
    // some code
}
console.timeEnd("test")

function loadData() {
    console.time("loadData")
    for (let i = 0; i < 10000000; i++) {
        // pretend to load some data
    }
    console.timeEnd("loadData")
}
loadData();

function processData() {
    console.time("processData")
    for (let i = 0; i < 10000; i++) {
        // data
    }
    console.timeEnd("processData")
}
processData();



