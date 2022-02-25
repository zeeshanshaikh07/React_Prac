/*
02. ACTIVATING STRICT MODE
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

03. FUNCTIONS

function logger() {
  console.log("My name is Zeeshan");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges); // for printing the number passed as argument
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
// console.log(fruitProcessor(2, 3));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);

04. FUNCTION DECLARATION VS. EXPRESSION

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2000);
// console.log(age1);

// Function expression
const clacAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = clacAge2(2000);

console.log(age1, age2);

05. ARROW FUNCTION

// arrow function
const clacAge3 = (birthYear) => 2022 - birthYear;
const age3 = clacAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear , firstName) => {
  const age = 2022 - birthYear;
  const retirement = 60 - age;
//   return retirement;
return `${firstName} retires in ${retirement} years`
};

console.log(yearsUntilRetirement(2000, "Zeeshan"))
console.log(yearsUntilRetirement(1970, "Shaikh"))

06. FUCNTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //   console.log(apples, oranges); // for printing the number passed as argument
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

07. REVIEWING FUNCTIONS

const clacAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = clacAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  // return
};
console.log(yearsUntilRetirement(1991, "Zeeshan"));
console.log(yearsUntilRetirement(1960, "Shaikh"));

08. CODING CHALLENGE #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

09. INTRODUCTION TO ARRAYS

const friend1 = "Zeeshan";
const friend2 = "Malik";
const friend3 = "Shaikh";

const friends = ["Zeeshan", "Malik", "Shaikh"];
console.log(friends);

const years = new Array(1999, 2000, 2020, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Zeesh";
console.log(friends);

const firstName = "Zeeshan";
const zeeshan = [firstName, "Shaikh", 2022 - 2000, "Engineer", friends];
console.log(zeeshan);
console.log(zeeshan.length);

// Exercise
const clacAge = function (birthYear) {
  return 2022 - birthYear;
};
const years1 = [1990, 1967, 2000, 2010, 2019, 2022];

const age1 = clacAge(years1[0]);
const age2 = clacAge(years1[1]);
const age3 = clacAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

const ages = [
  clacAge(years1[0]),
  clacAge(years1[1]),
  clacAge(years1[years1.length - 1]),
];
console.log(age1, age2, age3);

10. BASIC ARRAY OPERATIONS

const friends = ["Zeeshan", "Malik", "Shaikh"];

//Add elements
const newLength = friends.push("Zeesh");
console.log(friends);
console.log(newLength);

friends.unshift("Zee");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Zeeshan"));
console.log(friends.indexOf("Zeesha"));

console.log(friends.includes("Zeeshan"));
console.log(friends.includes("Zeesha"));

11. CODING CHALLENGE #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);

12. INTRODUCTION TO OBJECTS

const zeeshan = {
  firstName: "Zeeshan",
  lastName: "Shaikh",
  age: 2022 - 2000,
  job: "Software Engineer",
  friends: ["Zeeshan", "Malik", "Shaikh"],
};
console.log(zeeshan);

console.log(zeeshan.age);
console.log(zeeshan["lastName"]);

const nameKey = "Name";
console.log(zeeshan["first" + nameKey]);
console.log(zeeshan["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about zeeshan? Choose between firstName, lastName, age and job"
);

if (zeeshan[interestedIn]) {
  console.log(zeeshan[interestedIn]);
} else {
  console.log("wrong request! Choose between firstName, lastName, age and job");
}

zeeshan.location = "India";
zeeshan["instagram"] = "@zeeeeshan07";
console.log(zeeshan);

// Challege
// "Zeeshan has 3 friends ad his bestfriend is called shaikh"
console.log(
  `${zeeshan.firstName} has ${zeeshan.friends.length} friends, and his bestfriend is called ${zeeshan.friends[2]}`
);

13. OBJECT METHODS

const zeeshan = {
  firstName: "Zeeshan",
  lastName: "Shaikh",
  birthYear: 2000,
  job: "Software Engineer",
  friends: ["Zeeshan", "Malik", "Shaikh"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary : function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${zeeshan.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(zeeshan.calcAge());
console.log(zeeshan.age);

// Challege
// "Zeeshan is a 22 year old coder, and he has a driver's license"

console.log(zeeshan.getSummary());

15. CODING CHALLENGE #3

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(john.bmi, mark.bmi);

if(mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

16. ITERATION THE FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

17. LOOPING ARRAYS, BREAKING AND CONTINUINING

const zeeshan = [
  "Zeeshan",
  "Shaikh",
  2022 - 2000,
  "Coder",
  ["Zeesh", "Malik", "Shaikh"],
];
const types = [];
for (let i = 0; i < zeeshan.length; i++) {
  console.log(zeeshan[i], typeof zeeshan[i]);

  types[i] = typeof zeeshan[i];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// Continue and break
console.log('---------ONLY STRINGS---------')
for (let i = 0; i < zeeshan.length; i++) {
  if(typeof zeeshan[i] !== 'string') continue;
  console.log(zeeshan[i], typeof zeeshan[i]);
}

console.log('---------BREAK WITH NUMBER---------')
for (let i = 0; i < zeeshan.length; i++) {
  if(typeof zeeshan[i] === 'NUMBER') break;
  console.log(zeeshan[i], typeof zeeshan[i]);
}


const zeeshan = [
  "Zeeshan",
  "Shaikh",
  2022 - 2000,
  "Coder",
  ["Zeesh", "Malik", "Shaikh"],
  true,
];


for (let i = zeeshan.length - 1; i >= 0; i--) {
  console.log(i, zeeshan[i]);
}


for(let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weights ${rep} 🏋️`);
  }
}
*/
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) console.log(`Loop is about to end...`);
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

