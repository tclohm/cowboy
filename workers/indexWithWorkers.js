const { Worker } = require('worker_threads');

function fib(iterations) {
	return new Promise(function(resolve, reject) {
		const start = Date.now()
		const worker = new Worker('./fib.js', {
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

async function main() {
	try {
		const start = Date.now()
		const values = await Promise.all([
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
			fib(40),
		])
		console.log("vals: ", values)

		console.log(`fib done in: ${Date.now() - start}ms`)
	} catch (err) {
		console.error
	}
}

main()