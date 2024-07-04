let isAdmin = true;

if (isAdmin) {
    console.log("Admin here");
} else {
    console.log("You're not admin");
}

console.log("End if");

let point = 200;

if (point > 0 && point < 100) {
    console.log("You're silver member.");
} else if (point > 100 && point < 300) {
    console.log("You're gold member.");
} else {
    console.log("You're platinum member.");
}

console.log("End else if");

let monthNum;
let dayNum;

switch (monthNum && dayNum) {
    case 1 && 1 : 
        console.log("January 1st");
        break;
    case 1 && 2 :
        console.log("January 2nd");
        break;
    default :
        console.log("January");
        break;
}