import { useReducer, useState } from "react";

import { Todo } from ".";

export const ACTIONS = {
	ADD_TODO: "ADD_TODO",
	TOGGLE_TODO: "TOGGLE_TODO",
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
	}
};

const newTodo = (name) => {
	return { id: Math.floor(Math.random() * 1000), name, complete: false };
};

const UseReducerHook = () => {
	// dispatch: this dispatch function is essentially what we call in order to update our state
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
		setName("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</form>

			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} dispatch={dispatch} />
			))}
		</>
	);
};

export default UseReducerHook;
