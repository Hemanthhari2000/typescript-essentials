const username = "hemanth";
let age = 23;
age = 22;

console.log(username);
console.log(age);

// var example
// Global scope
var result = 0;
function add(number1: number, number2: number) {
    result = number1 + number2;
    return result;
}
add(5, 6)
console.log("Global scope result ", result);

// function scope
function anotherAdd(number1: number, number2: number) {
    var anotherResult = number1 + number2;
    return anotherResult;
}
anotherAdd(5, 4);
// try {
//     console.log("Function scope result: ", anotherResult); //error
// } catch (e) {
//     console.log("Some Error", e);
// }

// When it comes to if blocks 
// if (age > 20) {
//     var isOld = true;
// }
// console.log(isOld);
// above code works in javascript and not in typescript.

// let example
// Global scope and Function scope are same for let as well.
// When it comes to if blocks
// if (age > 20) {
//     let isOld = true;
// }
// console.log(isOld); // does not work in typescript and even in javascript as let is scoped inside { }.


// arrow function

const arrowAddFunction = (a: number, b: number): number => a + b;
console.log(arrowAddFunction(3, 4));

const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(arrowAddFunction(3, 6));

const num: (a: number) => number = a => a + a;


// Arrays and Objects
const hobbies = ["Sports", "Cooking", "Swimming"]
const activeHobies = ["Hiking"]

activeHobies.push(...hobbies);

const person = {
    name: 'Hemanth',
    age: 23
}

const copiedPerson = { ...person }
console.log(copiedPerson);

// Rest Parameters
const restAdd = (...numbers: number[]): number => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

console.log(restAdd(1, 2, 3, 5.5, 6.7, 8.9));

// array and objects destructuring

// one way
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);
console.log(remainingHobbies);

const personObj = {
    firstname: "Hemanth",
    personAge: 23,
}

const { firstname, personAge } = personObj;
console.log(firstname, personAge);

const { firstname: userName, personAge: aige } = personObj;
console.log(userName, aige);
