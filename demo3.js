console.log("Start");

setTimeout(() => {
    process.nextTick(() => console.log("Next Tick 2")); // cb will be waiting in nextTick queue
}, 0); // cb will be waiting in timer queue

Promise.resolve().then(() => console.log("Promise 1")); // cb will be waiting in promise queue

process.nextTick(() => console.log("Next Tick 1")); // cb will be waiting in nextTick queue

setTimeout(() => console.log("Timer 2"), 0); // cb will be waiting in timer queue


console.log("end");