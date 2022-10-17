import { useState, useCallback, useEffect } from "react";

const UseCallbackExmaple = () => {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const getItems = () => {
		return [number, number + 1, number + 2];
	};

	const theme = {
		backgroundColor: dark ? "#333" : "#fff",
		color: dark ? "#fff" : "#333",
	};

	return (
		<div style={style}>
			<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

			<button onClick={() => setDark((prevDark) => !prevDark)}>Toggle Theme</button>

			<List getItems={getItems} />
		</div>
	);
};

export default UseCallbackExmaple;
