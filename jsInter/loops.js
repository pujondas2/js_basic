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
        // console.log(`Dedicated 5`);
        continue;
    }
    // console.log(element)
}

let index = 1
while (index <= 10) {
    // console.log(`${index}`);
    index = index + 2;
}

const instructor = ['Priti', 'Topu', 'Niloy', 'Rinky']

let inst = 0;
while(inst < instructor.length){
    // console.log(instructor[inst]);
    inst = inst + 1
}


let table = 1;
while (table <= 5) {
    table1 = 1;
    while(table1 <= 10){
        // console.log(`${table} * ${table1} = ` + table*table1);
        table1++;
    }
    table++;
}

let num = 1;
do {
    // console.log(num);
    num++;
} while (num < 5);


let i = 1;
do {
    let j = 1;
    do {
        console.log(`${i} * ${j} = ` + i*j);
        j++
    } while (j <= 10);
    i++;
} while (i <= 5);