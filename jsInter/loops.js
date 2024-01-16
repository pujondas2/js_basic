for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is the best number`);
    }
    // console.log(element);
}

// console.log(element)

for (let i = 1; i <= 5; i++) {
    // console.log(`Outer Loop value : ${i}`)
    for (let j = 1; j <= 5; j++) {
        // console.log(`${i} * ${j} = ` + i*j);
    }    
}

const myArr = ['Topu', 'Priti', 'Madhov']
// console.log(myArr.length);

for (let i = 0; i <= myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`Dedicated 5`);     
        break;
    }
    // console.log(element) 
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`Dedicated 5`);
        continue;
    }
    console.log(element)
}