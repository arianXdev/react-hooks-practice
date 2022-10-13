import { useRef, useEffect } from "react";

const UseRefExample = () => {
	const inputRef = useRef(null); // it's equal to the input element!

	useEffect(() => {
		// Why am I putting this in the useEffect? Because I want to have it after rendering
		console.log(inputRef.current);
	}, []); // only for mounting lifecycle | dependency array

	return (
		<div className="container">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h2 className="alert alert-info px-4">useRef Hook in React</h2>

				<input ref={inputRef} type="text" className="form-control w-50" placeholder="Give me a name..." />

				<button type="button" className="btn btn-outline-primary mt-3">
					Focus on it
				</button>
			</div>
		</div>
	);
};

export default UseRefExample;
