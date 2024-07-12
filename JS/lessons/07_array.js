let users = ['Alice', 'Bob', 'Bard',['John', 'James']]

console.log(users);
console.log(users[0]);
console.log(users.length);
console.log(users[3].length);

// add to array
users[4] = 'vee'

// override value
users[1] = 'Shaun'

console.log(users);

// loop

for(i = 0; i < users.length; i++) {
    console.log(`User: ${users[i]}`);
}