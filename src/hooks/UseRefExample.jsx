const UseRefExample = () => {
	return (
		<div className="container">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h2 className="alert alert-info px-4">useRef Hook in React</h2>

				<input type="text" className="form-control w-50" placeHolder="Give me a name..." />

				<button type="button" className="btn btn-outline-primary mt-3">
					Focus on it
				</button>
			</div>
		</div>
	);
};

export default UseRefExample;
