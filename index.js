function fibonacci(n) {
	// check out that readability! LOL
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

function fib(iterations) {
	return new Promise( function(resolve) {
		const start = Date.now()
		const result = fibonacci(iterations)
		console.log(`fib action done in: ${Date.now() - start}ms`)
		resolve(result)
	})
}

async function main() {
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
}

main().catch(console.error)