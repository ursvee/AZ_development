let info = {
    name: 'Bard',
    age: 22,
    address: 'Sittwe',
    greet: function () {
        // console.log('hello, Bard'); // 1 time
        return 'hello, Bard'
    },
    hobbies: ['football', 'batminton', 'games'],
}

console.log(info);

// notation
console.log(info.name); // dot
console.log(info['age']); // bracket

// console log overlap undefined
// console.log(info.greet()); // // 2 time 
// info.greet();

// no overlap
console.log(info.greet());

console.log(info.hobbies);
console.log(info['hobbies'][2]);