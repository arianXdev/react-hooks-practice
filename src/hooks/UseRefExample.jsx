import { useRef, useEffect, useState } from "react";

const UseRefExample = () => {
	const [name, setName] = useState("");
	// const [renderCount, setRenderCount] = useState(1); // wrong code! We can't use state for counting the number of re-renders, but we can use useRef instead!
	const renderCount = useRef(1);

	const inputRef = useRef(null); // it's equal to the input element!
	const prevState = useRef("");

	useEffect(() => {
		// Why am I putting this in the useEffect? Because I want to have it after rendering
		console.log(inputRef.current);
		// inputRef.current.placeholder = "Hello Everybody!";
		// inputRef.current.className += " bg-warning";
	}, []); // only for mounting lifecycle | it's called dependency array

	useEffect(() => {
		prevState.current = name;
	}, [name]); // depends on the changes of name value

	useEffect(() => {
		// setRenderCount((prevRenderCount) => prevRenderCount + 1); // wrong code! We have to use useRef hook instead of using state to count the number of re-renders.
		renderCount.current = renderCount.current + 1;
	});

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div className="container">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h2 className="alert alert-info px-4">useRef Hook in React</h2>

				<p>{`Your name: ${name}`}</p>
				<p>{`Your previous name was: ${prevState.current}`}</p>
				<p>{`The Number of re-renders until now: ${renderCount.current}`}</p>

				<input ref={inputRef} type="text" className="form-control w-50" placeholder="Give me a name..." value={name} onChange={(e) => setName(e.target.value)} />

				<button type="button" onClick={focusInput} className="btn btn-outline-primary mt-3">
					Focus on it
				</button>
			</div>
		</div>
	);
};

export default UseRefExample;
