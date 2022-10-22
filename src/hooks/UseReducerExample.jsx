import { useState } from "react";

/*
 * useReducer hook is an alternative instead of using useState
 * useReducer hook is similar to Redux which is a state management tool,
 * useRedcuer is made of three parts: 1. reducer 2. action 3. store
 *** 1. reducer: they're functions! what do they do? They actually handle the state depending on what we want,
 *** 2. action: an object that we send (dispatch) to reducer functions to do something (properties: type [implements on state], payload [value]),
 *** 3. store: a place in which state stores there, so it actually stores the state.
 */

const UseReducerExample = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="mx-auto mt-3 d-flex align-items-center justify-content-center flex-column w-50">
			<h5 className="alert alert-info text-center">🔱 useReducer Hook in React 🔱</h5>
			<button className="btn btn-primary W-50" onClick={() => setCount((prevCount) => prevCount + 1)}>
				➕ Increase
			</button>
			<p className="alert alert-warning text-center my-3">
				Your counter is equal to {count} <span className="badge rounded-pill bg-success"></span>
			</p>
			<button className="btn btn-danger W-50" onClick={() => setCount((prevCount) => prevCount - 1)}>
				➖ Decrease
			</button>
		</div>
	);
};

export default UseReducerExample;
