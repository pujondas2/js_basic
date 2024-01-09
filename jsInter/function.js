function name() {
    console.log('P')
    console.log('R')
    console.log('I')
    console.log('T')
    console.log('I')
}

// name();

function addTwoNum(num1, num2) {
    // console.log('pujon')
    return num1 + num2;
}

const result = addTwoNum(5, '2');

// console.log(result);

function loginMsg(username = 'priti00') {
    if(!username) {
        return 'please enter the username'
    } else {
        return `${username} is just logged in`;
    }
}

// console.log(loginMsg())

function addToCart(cart1, cart2, ...cartall) {
    return [cart1, cart2, cartall]
}

// console.log(addToCart(200, 400, 300, 1200, 180, 560));

const madam = {
    name : 'Priti',
    age : 26
}

function handleObject(getObject) {
    return `Her name is ${getObject.name} and her age is ${getObject.age}`
}

// console.log(handleObject(madam))
// console.log(handleObject({
//     name : 'Rinky',
//     age: 29
// }))

const price = [500, 250, 360, 240]

function handleArray(getArray) {
    return `Shirt is ${getArray[2]} TK,\nT-Shirt is ${getArray[1]} TK.`
}

// console.log(handleArray(price));
console.log(handleArray([850, 630, 870]));