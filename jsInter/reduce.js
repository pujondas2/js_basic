const numb = [1, 2, 3]

// const total = numb.reduce((acc, num) => {
//     console.log(`Acc : ${acc} and Num : ${num}`)
//     return acc + num;
// }, 0)

const total = numb.reduce((acc, num) => acc + num, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "JS All You Need To Know",
        price: 2999
    },
    {
        itemName: "Think in a Javascript Way",
        price: 3999
    },
    {
        itemName: "Chai or Javascript",
        price: 5999
    },
    {
        itemName: "Think in a Dom Way",
        price: 999
    },
]

// const totalPay = shoppingCart.reduce((acc, val) => {
//     return acc + val.price;
// }, 0)

const totalPay = shoppingCart.reduce((acc, val) => acc + val.price, 0)

console.log(totalPay);