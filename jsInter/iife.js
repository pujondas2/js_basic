// Immediately Invoked Function Expression

(function connectDb() {
    console.log('DB CONNECTED');
})();

(() => {
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`username is ${name}`);
})('pritichy00');