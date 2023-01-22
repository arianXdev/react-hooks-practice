import { useReducer } from "react";

/*
 * useReducer hook is an alternative instead of using useState
 * useReducer hook is similar to Redux which is a state management tool,
 * useRedcuer is made of three parts: 1. reducer 2. action 3. store
 *** 1. reducer: they're functions! what do they do? They actually handle the state depending on what we want (takes 2 inputs - state & action),
 *** 2. action: an object that we send (dispatch) to reducer functions to do something (properties: type [implements on state], payload [value]),
 *** 3. store: a place in which state stores there, so it actually stores the state.
 */

const ACTIONS = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
};

// So the first step is to create a reducer which is a function that lets us handle the state depending on what we want
const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };

		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };

		default:
			return state;
	}
};

const UseReducerExample = () => {
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const increase = () => {
		dispatch({ type: ACTIONS.INCREMENT }); // dispatches to reducer function
	};

	const decrease = () => {
		dispatch({ type: ACTIONS.DECREMENT }); // dispatches to reducer function
	};

	return (
		<div className="mx-auto mt-3 d-flex align-items-center justify-content-center flex-column w-50">
			<h5 className="alert alert-info text-center">🔱 useReducer Hook in React 🔱</h5>
			<button className="btn btn-primary W-50" onClick={increase}>
				➕ Increase
			</button>
			<p className="alert alert-warning text-center my-3">
				Your counter is equal to {state.count} <span className="badge rounded-pill bg-success"></span>
			</p>
			<button className="btn btn-danger W-50" onClick={decrease}>
				➖ Decrease
			</button>
		</div>
	);
};

export default UseReducerExample;
