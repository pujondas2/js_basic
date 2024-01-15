// if, else if, else, switch, truthy&falsy values, nullish coalescing operator, ternary operator

// < > <= >= == === != !== 

const username = 'pritichy00';
const id = 50;

if (username) {
    // console.log(`Username is ${username}`);
}

const credit = 500;

if(credit === '500') {
    // console.log(`Credit is True`);
} else {
    // console.log(`Credit is False`);
}

if ('3' <= 3) {
    // console.log('true');
}

const userInput = 'jdfal';

const num = 35;

if (userInput === num) {
    // console.log(`You're Win`);
} else if(userInput < num) {
    // console.log('Input is less than num');
} else if(userInput > num) {
    // console.log('Input is greater than num');
} else {
    // console.log('input not match');
}


const user = {
    username: 'pritichy01',
    useremail: 'priti@chy.ai',
    password: '12345'
}

if(user.username && user.useremail && user.password){
    // console.log(`You're logged in`);
} else if (user.username || user.useremail) {
    // console.log(`Forgot Password`);
} else {
    // console.log(`Error`);
}


const price = 780;

switch (price) {
    case 350:
        // console.log(`This price match with Shirt`);
        break;
    case 400:
        // console.log(`This price match with Pant`);
        break;
    case 780:
        // console.log(`This price match with t-Shirt`);
        break;
    case 1500:
        // console.log(`This price match with Shoe (1 Pair)`);
        break;

    default:
        // console.log(`Sorry Your Price Not Match`);
        break;
}


// truthy : ' ', '0', 'false', [], {}, function(){}

// falsy : false, '', 0, -0, BigInt 0n, null, undefined, NaN

const myArr = []
const myObj = {}


if(myArr.length === 0) {
    // console.log('MyArray is empty');
}

if(Object.keys(myObj).length === 0) {
    // console.log('MyObject is Empty');
}

// nullish coalescing operator (??)

const inputValue = undefined ?? null ?? 10;

// console.log(inputValue);


const score = 50;

// if(score) console.log(score), console.log(500);

(score === 100) ? console.log('right') : console.log('wrong');

const name = 'Priti';

if(name) {
    let looking = 'Pretty'
    console.log(`${name} is ${looking}`);
}






