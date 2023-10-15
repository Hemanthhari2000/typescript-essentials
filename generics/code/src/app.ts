// string array 
// const names = ["Hemanth", "Kumar"]
// console.log(names);

// let names: Array<string | number | boolean> = [];
// names[0] = true;
// console.log(names);

// using promise generics
// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000)
// })

// promise.then(data => {
//     data.split(' ')
// })


// Generic Functions

function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const mergeObjs = merge({ firstname: "Hemanth" }, { lastname: "Kumar" })
console.log(mergeObjs);
console.log(mergeObjs.firstname);
console.log(mergeObjs.lastname);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe({ length: 1 }));
console.log(countAndDescribe(['Spring']));

function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Hemanth");
console.log(textStorage.getItems());

const booleanStorage = new DataStorage<boolean>();
booleanStorage.addItem(true);
booleanStorage.addItem(false);
console.log(booleanStorage.getItems());

// const objectStorage = new DataStorage<object>(); //error
// const hemanthObj = { name: 'Hemanth' }
// objectStorage.addItem(hemanthObj);
// objectStorage.addItem({ name: 'Max' })
// //...
// console.log(objectStorage.getItems());
















