// var , let , const

// const accountId = 1345748
// let accountEmail = "das@pujon.com"
// var accountPass = 12345
// accountCity = "Chattogram"


// // accountId = 65665
// accountEmail = "snigda@pujon.com"
// accountPass = 65658
// accountCity = "Dhaka"


// console.log();

// console.table([accountId, accountEmail, accountPass, accountCity])


// const profile = {
//     profileName : "Pujon Das",
//     posts : 195,
//     followers : 495,
//     following : 5,
//     isFollow :  false
// }

// console.log(typeof profile["following"])
// console.log(typeof profile)

// function show() {
//    {
//     (function(){
//         var x = 5;
//         var y = 6;
//     })();
//    }
//     console.log(x,y)
// }

// show()

// if(true) {
//     var a = 5;
//     var a = 7;
// }

// console.log(a)

// if(true) {
//     let b = 5;
//     b = 8;
// console.log(b)

// }


// console.log(2 === 2)
// console.log("2" === 2)

// console.log(null > 0)

// function sum(n1, n2){
//     return n1+n2;
// } 

// console.log(typeof sum)


// const strNum = '3';

// const number = Number(strNum)

// console.log(number)

// stack and heap memory
// Stack (Primitive) Heap (Non-Primitive)

// let myCompany = 'Data Verify'

// anotherCompany = myCompany

// anotherCompany = 'Data Temple'

// console.log(myCompany)
// console.log(anotherCompany)


// let operatorOne = {
//     id : 'OPRON203',
//     name : 'Pujon Das'
// }

// let operatorTwo = operatorOne

// operatorTwo.id = 'BG01017'

// console.log(operatorOne)

// let name = 'pujon'
// let repo = 40;                                                       

// console.log(name)

// const salary = 8000;

// console.log(salary)

// let newSalary = new Number(100000);

// console.log(newSalary.toLocaleString("en-IN"))
// console.log(newSalary)

// abs, ceil, floor, max, min, pow, random, round, sqrt

// console.log(Math.abs(-4.5))
// console.log(Math.round(4.7))
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.8))
// console.log(Math.pow(5, 2))
// console.log(Math.sqrt(64))
// console.log(Math.min(5, 25, 36, 17))
// console.log(Math.max(5, 25, 36, 17))
// console.log(Math.random(1,7).toFixed())

// date

const myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate);

// const anotherDate = Date.now();

// console.log(anotherDate)

const pritiDate = new Date("2023", "02", "14", "5", "12", "30");

console.log(pritiDate.getMonth());
