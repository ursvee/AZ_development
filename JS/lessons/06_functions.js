function myFunc(func) {
    console.log(`hello, ${func}`);
}

myFunc('function');

// variable function

let month = function (month = 'November') { // default value
    console.log(`hello, ${month}`);
}

month('July');

let getNum = function (num) {
    // let num = prompt("Enter number")
    // let num = 10;
    console.log(`Number is ${num}`);
}

getNum(10);

// arrow function

let isAdmin = (name) => {
    // let name = 'vee'
    console.log(`hello, ${name}`)
};

isAdmin('vee');

let sum = (x, y) => console.log(x + y);

sum(5, 5);

// void

function checkResult(result) {
    console.log(result);
}

checkResult(true);

// return

function checkNums(x, y) {
    return x + y;
}


// oneline statement 
// let checkNums = (x, y) => x + y; 

let result = checkNums(5, 5);
console.log(result);

// global, local

let admin = 'vee'; // global

let greetAdmin = () => {
    let text = 'Welcome' // local
    let greet = `${text}, ${admin}`
    console.log(greet);
}

greetAdmin();
// console.log(text);
