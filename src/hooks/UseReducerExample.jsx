import { useState } from "react";

const UseReducerExample = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="mx-auto mt-3 d-flex align-items-center justify-content-center flex-column w-50">
			<h5 className="alert alert-info text-center">🔱 useReducer Hook in React 🔱</h5>
			<button className="btn btn-primary W-50" onClick={() => setCount((prevCount) => prevCount + 1)}>
				➕ Increase
			</button>
			<p className="alert alert-warning text-center my-3">
				Your counter is equal to {} <span className="badge rounded-pill bg-success"></span>
			</p>
			<button className="btn btn-danger W-50" onClick={() => setCount((prevCount) => prevCount - 1)}>
				➖ Decrease
			</button>
		</div>
	);
};

export default UseReducerExample;
