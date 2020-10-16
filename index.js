exports.greet = function(name = null) {
    if (name) {
        console.log(`Hello ${name}!`);
    } else {
        console.log('Hello World!');
    }
}
