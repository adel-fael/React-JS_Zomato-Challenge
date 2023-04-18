import { useEffect, useState } from 'react'

function App() {
	const [resultArray, setResultArray] = useState([])

	// remove the back ticks when use in real projects
	const fnArray = [
		// function add(a, b) {
		// 	return `Addition: ${a} + ${b} = ${a + b}`
		// },
		// function subtract(a, b) {
		// 	return `Subtract: ${a} - ${b} = ${a - b}`
		// },
		// function multiply(a, b) {
		// 	return `Multiply: ${a} x ${b} = ${a * b}`
		// },
		// function divide(a, b) {
		// 	return `Divide: ${a} / ${b} = ${a / b}`
		// },
		{
			Fn: function add(a, b) {
				return `Addition: ${a} + ${b} = ${a + b}`
			},
		},
		{
			Fn: function subtract(a, b) {
				return `Subtract: ${a} - ${b} = ${a - b}`
			},
		},
		{
			Fn: function multiply(a, b) {
				return `Multiply: ${a} x ${b} = ${a * b}`
			},
		},
		{
			Fn: function divide(a, b) {
				return `Divide: ${a} / ${b} = ${a / b}`
			},
		},
	]

	const mainFn = (a, b) => {
		let results = fnArray.map((fn) => {
			return fn.Fn(a, b)
		})
		console.log(results)
		setResultArray(results)
	}

	useEffect(() => {
		mainFn(3, 2)
	}, [])
	return (
		<main>
			<h1>
				''write a function which takes an array of multiple functions and
				executes them one by one, in left to right manner. ''
				<br /> <i>- By Zomato</i>
			</h1>
			<br />
			<h2>
				{resultArray.map((num,idx) => {
					return (
						<>
							<div key={idx}>{num}</div>
						</>
					)
				})}
			</h2>
		</main>
	)
}

export default App
