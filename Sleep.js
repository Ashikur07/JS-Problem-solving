
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();
var test = sleep(100).then(() => console.log(Date.now() - t)); // ~100
console.log(test);

