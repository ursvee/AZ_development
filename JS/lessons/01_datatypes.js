let job = "developer" // string
let age = 23 // number

age = 20 // override

const PI = 3.14 // constant

let isAdmin = true; // boolean

let value; // undefined

let startNumber = null // null

let users = ['Alice', 'John', 'Bard'] // array

let getMessage = {
    name : 'Alice',
    age : 22,
    message : function () {
        console.log('Hello there')
    } 
} // object

let message = "hello";
let receiver = "Bard";
let myMessage = `${message}, ${receiver}`; // template string

console.log(getMessage.message()) // object to log

console.log(typeof users) // check type
