const { Worker } = require('worker_threads');

const sharedBuffer = new SharedArrayBuffer(4);
const buffer = new Uint8Array(sharedBuffer);
buffer.fill(5) // [5, 5, 5, 5]

console.log("buffer before modify: ", buffer)

const worker = new Worker("./w.js", {
	workerData: { sharedBuffer },
});
// mutate the buffer directly --- YIKES!
worker.once("message", function(){
	console.log("buffer after modify:", buffer)
})

worker.once("error", function(err) {
	console.error(err)
})
