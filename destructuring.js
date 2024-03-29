/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
//not destructing
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1]
let joe = ages[2]
console.log(john, mary, joe);
//this is deconstructing
let ages1 = [30, 26, 27];
let [bob, sarah, aleah] = ages;
console.log(bob, sarah, aleah);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnsNative, johnsSecondary] = languages;
console.log(johnsNative, johnsSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage : "english",
    secondLanguage : "french",
    thirdLanguage : "spanish",
    forthLanguage : "german",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);
// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);