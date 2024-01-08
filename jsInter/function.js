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

console.log(loginMsg())