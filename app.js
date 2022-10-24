// STRINGS 
let firstVariable = "Hello World";
let secondVariable = firstVariable;
secondVariable = "Bonjour le Monde";
console.log(firstVariable);
console.log(secondVariable);

let yourName = "Kiara";
console.log(`Hello, my name is ${yourName}`);

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Kiara' !== e);
console.log(true || false);
console.log(false || false || false && false || false || true);
console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

//the Farm
let animal = "cow"
if (animal = "cow") {
    console.log("moooo");
} else{
    console.log("Hey! You're not a cow.");
}

//Driver's Ed
let age = 17
if(age < 16){
    console.log("Sorry, you're too young.");
} else {
    console.log("Here are the keys!");
}


//LOOPS

//The Basics
const zeroToTen = [];
for(let i = 0; i <11; i++) {
    zeroToTen.push(i);
}
console.log(zeroToTen);

const tenPlus = [];
for(let i = 10; i < 401; i++) {
    tenPlus.push(i);
}
console.log(tenPlus);

const mult = [];
for(let i =12; i < 4000; i += 3) {
    mult.push(i);
}
console.log(mult);

//Get Even
const even = [];
for(let i = 1; i < 101; i++) {
    even.push(i);
    if (i += 1) {
       console.log(i + ' is an even number');
    }
}
console.log(even);

//Give Me 5
const multiples = [];
for(let i = 0; i < 101; i++) {
    multiples.push(i);
    if (i += 3){
        console.log('I found a ' + i + ' Three is a crowd.');
    }
    if (i += 5) {
        console.log('I found a ' + i + ' High Five!');
    }

}
console.log(multiples);
//Savings Account



//ARRAYS & CONTROL FLOW