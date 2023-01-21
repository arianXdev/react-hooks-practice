import { useRef, useEffect } from "react";

const UseRefHook = () => {
	const inputRef = useRef(null); // because we don't have any intial value, so we give it null
	const buttonRef = useRef(null);
	// We also can use useRef hook in some cases which we're not allowed to useState

	useEffect(() => {
		console.log(inputRef);
	}, []); // Dependency array | Mounting lifecycle

	return (
		<>
			<h2>How to use useRef Hook in React.js</h2>
			<div className="d-flex justify-content-center my-4">
				<input ref={inputRef} className="form-control w-75" placeholder="Give me something?" />
				<button ref={buttonRef} className="btn btn-outline-primary mx-2">
					Focus on me!
				</button>
			</div>
		</>
	);
};

export default UseRefHook;
