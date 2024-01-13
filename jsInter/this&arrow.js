const user = {
    username : 'pujon',
    id : 55,
    profile : function () {
        console.log(`Username is ${this.username} and id is ${this.id}`)
    }
}

// user.profile()

function myfunc() {
    const name = 'susmoy'
    // console.log(this)
}

// myfunc()


const myfunc1 = (num1, num2) => (num1+num2)

// console.log(myfunc1(5,5));

const myObj = () => ({username : 'pujon'})

console.log(myObj());
