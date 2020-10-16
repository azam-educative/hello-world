function greet(name = null) {
    if (name) {
        console.log(`Hello ${name}!`);
    } else {
        console.log('Hello World!');
    }
}

module.exports = greet;

