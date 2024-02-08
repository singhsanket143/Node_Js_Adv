const fs = require('fs');

fs.readFile('./readme.md', 'utf8', (err, data) => { // I/O queue - Callback queue 
    if (err) {
      console.error(err);
      return;
    }
    process.nextTick(() => console.log("next tick from file read"));
    console.log(data);
});

fs.readFile('./readme.md', 'utf8', (err, data) => { // I/O queue - Callback queue 
    if (err) {
      console.error(err);
      return;
    }
    process.nextTick(() => console.log("next tick from file read 2"));
    console.log("2:", data);
});


process.nextTick(() => console.log("Next tick"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timer 1"), 0);
setImmediate(() => console.log("Immediate callback"));

for(let i = 0 ; i < 10000000000; i++ ) {} // > 5s