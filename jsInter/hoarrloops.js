// for of

// ['', '', '']

// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const name = 'Prity Choudhary'

for (const val of name) {
    // console.log(val);
}

const map = new Map();

map.set('BD', 'Bangladesh');
map.set('IND', 'India');
map.set('SL', 'Sri Lanka');

// console.log(map);

for (const [item, val] of map) {
    // console.log(item);   
    // console.log(val);   
}

const obj = {
    instructorName: 'Prity',
    instructorId : 20
}

// for (const [val] of obj) {
//     console.log(val);
// }

for (const key in obj) {
    // console.log(`${key} : ${obj[key]}`);
}

const lan = ['Javascript', 'Python', 'Php', 'Go']

for (const key in lan) {
    // console.log(lan[key]);
}

lan.forEach( function (item) {
    // console.log(item);
} )

const names = ['Topu', 'Sajal', 'Priti', 'Niloy', 'Sushmoy']

names.forEach( (item) => {
    // console.log(item);
} )


const myObj = [
    {
        username : 'pritychy00',
        useremail : 'pritychy00@js.com'
    },
    {
        username : 'pujondas',
        useremail : 'pujondas@gpt.com'
    },
    {
        username : 'rinkysen01',
        useremail : 'rinkysen01@mdn.com'
    }
]

myObj.forEach( (item, index, arr) => {
    console.log(item.useremail, index, arr);
} ) 