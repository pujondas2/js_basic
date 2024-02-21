const nums = [1,2,3,4,5,6]

// const numb = nums.map( (num) => {
//     return num + 10;
// } )

// const numb = nums.filter( (num) => {
//     return num + 10
// } )

const numb = nums
                .map((num) => num + 10)
                .map((num) => num * 10)
                .filter((num) => num < 140)

console.log(numb);