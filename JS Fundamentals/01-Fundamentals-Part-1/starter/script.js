/* 
05. VALUES AND VARIABLES

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Zeeshan");
console.log(23);

let firstName = "Zeeshan";
console.log(firstName);

let lastName = "Shaikh";
console.log(lastName); 

// Variable name coventions
let myfirstJob = 'Student'
let myCurrentJob = 'Coder'

console.log(myfirstJob); 
console.log(myCurrentJob); 

07. DATA TYPES

let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "zeeshan");

jsIsFun = 'YES!';
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);

08. LET, CONST AND VAR

let age = 30;
age = 31;

const birthYear = 2000;
// birthYear = 2000;
// const job;

var job = "coder";
job = "student";

lastName = "Shaikh";
console.log(lastName);

09. BASIC OPERATORS

// Math operators
const now = 2022;
const ageZeeshan = now - 2000;
const ageShaikh = now - 2010;
console.log(ageZeeshan, ageShaikh);

console.log(ageZeeshan * 2, ageZeeshan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = "Zeeshan";
const lastName = "Shaikh";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageZeeshan > ageShaikh); // >. <, >=, <=
console.log(ageZeeshan >= 23);

const isFullAge = ageZeeshan >= 23;

console.log(now - 2000 > now - 2010);

10. OPERATOR PRECEDENCE

const now = 2022;
const ageZeeshan = now - 2000;
const ageShaikh = now - 2010;
console.log(now - 2000 > now - 2010);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageZeeshan + ageShaikh) / 2
console.log(ageZeeshan, ageShaikh, averageAge);

11. CODING CHALLENGE #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

12. STRING AND TEMPELATE LITERALS

const firstName = "Zeeshan";
const job = "software engineer";
const birthYear = 2000;
const year = 2022;
const zeeshan =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(zeeshan);

const zeeshannew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(zeeshannew);

console.log(`just a regular string...`);

console.log("string with \n\
multiple \n\
lines");

console.log(`string
multiple
lines`);

13. TAKING DECISIONS IF ELSE

const age = 15;

if (age >= 18) {
  console.log("Zeeshan can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Zeeshan is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
   century = 21;
}
console.log(century);

14. CODING CHALLENGE #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

15. TYPE CONVERSION AND COERCION    

// type conversion
const inputYear = "2000";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Zeeshan"));
console.log(typeof NaN);

console.log(String(21), 21);

// type coercion
// Numbers are converted to Strings
console.log("I am " + 22 + " years old");

// Strings are converted to Numbers
console.log("22" - "10" - 3);
console.log("22" / "2");
console.log("22" > "18");

let n = "1" + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n);

16. TRUTHY AND FALSY VALUES

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Zeeshan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}

17. == vs ===

const age = "18";
if (age === 18) {
  console.log("you just became an adult (strict)");
}

if (age == 18) {
  console.log("you just became an adult (loose)");
}

const fav = Number(prompt("what is your fav number?"));
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log("cool 23 is amazing");
} else if (fav === 7) {
  console.log("7 is also cool");
} else {
  console.log("number is not 23 or 7");
}

if (fav !== 23) console.log("why not 23?");

19. LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Zeeshan is able to drive!')
// } else {
//     console.log("someone should drive...")
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Zeeshan is able to drive!')
} else {
    console.log("someone should drive...")
}

20. CODING CHALLENGE #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const minScore = 100;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && minScore === 100) {
//   console.log("Team Dolphin is the Winner");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Team Koalas is the Winner");
// } else {
//   console.log("Draw");
// }

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Team Dolphin is the Winner 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100 ) {
  console.log("Team Koalas is the Winner 🏆");
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both wins 🏆")
}else {
  console.log("No one wins 😭");
}

20. THE SWITCH STATEMENT

const day = "saturday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory vids");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code");
    break;
  case "friday":
    console.log("record vids");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

22. STATEMENTS AND EXPRESSIONS

if (23 > 10) {
  const str = "23 is bigger";
}
console.log(`I'm ${2022 - 2000} years old`);

23. THE CONDITIONAL(TERNARY) OPERATOR

const age = 22;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("i like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

24. CODING CHALLENGE #4
*/
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
