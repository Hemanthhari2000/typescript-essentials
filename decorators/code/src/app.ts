// function Logger(constructor: Function) {
//     console.log("Logging");
//     console.log(constructor);
// }

// @Logger
// class Person {
//     name = 'Hemanth';
//     constructor() {
//         console.log("Creating a person");
//     }
// }

// const person = new Person();
// console.log(person);

//Factory Decorator
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

// with Templates
function WithTemplates(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

@Logger("Logging - Person1") // executes 2nd
@WithTemplates("<h1>Hello</h1>", 'app') // executes 1st
class Person {
    name = 'Hemanth';
    constructor() {
        console.log("Creating a person");
    }
}

const person = new Person();
console.log(person);
