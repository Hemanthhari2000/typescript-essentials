// interfaces
// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void
// }

// let user1: Person;
// user1 = {
//     name: "Hemanth",
//     age: 23,
//     greet(phrase: string) { console.log(phrase + " " + this.name); }
// }
// console.log(user1);

interface Greetable {
    name: string;

    greet(phrase: string): void
}

class Person implements Greetable {
    name: string;
    age = 23;

    constructor(name: string) {
        this.name = name;
    }
    greet(phrase: string): void {
        if (!phrase) throw new Error("Invalid Phrase.");
        console.log(phrase + " " + this.name);
    }
}

const person = new Person("Hemanth")
person.greet("Hi")


