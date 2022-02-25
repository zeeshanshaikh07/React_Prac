// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const descIndia = describeCountry("India", 1378, "Delhi");
// const descUSA = describeCountry("USA", 332, "Washington");
// const descFrance = describeCountry("France", 67, "Paris");
// console.log(descIndia);
// console.log(descUSA);
// console.log(descFrance);

// ///////////////////////////////////

// // Function Declatarion
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// const percIndia1 = percentageOfWorld1(1378);
// const percUSA1 = percentageOfWorld1(332);
// const percFrance1 = percentageOfWorld1(67);

// console.log(percIndia1);
// console.log(percUSA1);
// console.log(percFrance1);

// // Function Expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const percIndia2 = percentageOfWorld2(1378);
// const percUSA2 = percentageOfWorld2(332);
// const percFrance2 = percentageOfWorld2(67);

// console.log(percIndia2);
// console.log(percUSA2);
// console.log(percFrance2);

// // Arrow Function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percIndia3 = percentageOfWorld3(1378);
// const percUSA3 = percentageOfWorld3(332);
// const percFrance3 = percentageOfWorld3(67);
// console.log(percIndia3);
// console.log(percUSA3);
// console.log(percFrance3);

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
//   console.log(description);
// }

// describePopulation("India", 1378)
// describePopulation("USA", 332)
// describePopulation("France", 67)

// const populations = [1378, 332, 67, 33];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages)

// const neighbours = ["Pakistan", "China", "Bangladesh"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D'");
// }

// neighbours[neighbours.indexOf('China')] = 'Republic Of China'
// console.log(neighbours);

// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   popuation: 1378,
//   neighbours: ["Pakistan", "China", "Bangladesh"],

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.popuation} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);
// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.popuation} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry.popuation += 2;
// console.log(myCountry.popuation);

// myCountry['popuation'] -= 2
// console.log(myCountry.popuation);

// for (let voters = 1; voters <= 50; voters++) {
//   console.log(`Voter number ${voters} is currrently voting`);
// }
// const populations = [1378, 332, 67, 33];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);
