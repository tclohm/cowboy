const { Worker } = require('worker_threads');

function fib(iterations) {
	return new Promise(function(resolve, reject) {
		const start = Date.now()
		const worker = new Worker('./index.js', {
			workerData: { iterations }
		})
		// --- Listen for message
		worker.once("message", function(data) {
			console.log(`worker [${worker.threadId}]: done in ${Date.now() - start}ms`)
			resolve(data)
		})

		worker.once("error", function(err) {
			reject(err)
		})
	})
}