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

console.log(user.greeting())

user.greetingPriti = function(){
    console.log(`Happy New Year, ${this.guest} Madam`)
}

console.log(user.greetingPriti());

console.log(user);
