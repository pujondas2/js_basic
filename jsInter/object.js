const mysym = Symbol('key')

const user = {
    userName : 'pujondas',
    "full name" : 'Pujon Das',
    [mysym] : 'das',
    location : 'Chattogram',
    email : 'pujondas@google.com',
    isLoggedIn : false,
    isLoginDays : ['Tuesday', 'Friday'], 
    guest : 'Priti'
}

// console.log(user.isLoginDays);
// console.log(user['email']);
// console.log(user["full name"]);
// console.log(user[mysym]);

// user.email = 'pujondas@github.com'
// Object.freeze(user)

// user.email = 'pujondas@copilot.com'
// console.log(user)

user.greeting = function(){
    console.log('Happy New Year')
}

// console.log(user.greeting())

user.greetingPriti = function(){
    console.log(`Happy New Year, ${this.guest} Madam`)
}

// console.log(user.greetingPriti());

// console.log(user);


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.userName = 'pritichy';
tinderUser.password = 'chy01234';
tinderUser.isLoggedIn = false;
tinderUser.followers = 10;

// console.log(tinderUser);

const finderUser = {
    user : {
        username : {
            fullname : {
                firstName : 'Priti',
                lastName : 'Choudhary'
            }
        }
    }
}

// console.log(finderUser.user.username.fullname.firstName);

const teacher1 = {pname: "priti", pid: "10"}
const teacher2 = {tname: "topu", tid: "13"}
const teacher3 = {sname: "sajal", sid: "8"}

// const teachers = Object.assign({}, teacher1, teacher2, teacher3)

const teachers = {...teacher1, ...teacher2, ...teacher3}

// console.log(teachers);

const person = [
    {
        id : 1,
        name : "Priti"
    },
    {
        id : 2,
        name : "Topu"
    },
    {
        id : 3,
        name : "Sajal"
    }
]

// console.log(person[1].name)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))
