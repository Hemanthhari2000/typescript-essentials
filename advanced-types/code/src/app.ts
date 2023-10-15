// Intersection Types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

// same thing can be done using interfaces as well.

// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee { }

// const employee: ElevatedEmployee = {
//     name: 'Hemanth',
//     privileges: ['admin'],
//     startDate: new Date()
// }

const employee1: ElevatedEmployee = {
    name: 'Hemanth',
    privileges: ['admin'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const aUNumber: Universal = 1; // takes a number
const aCString: Combinable = "";
const aCNumber: Combinable = 2;

const aNnumber: Numeric = 3;
const aNBoolean: Numeric = false;


// Type Guards

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name", emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}

printEmployeeInformation(employee1);

// literal type
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at: " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 12 })

// Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = "Hello!"
