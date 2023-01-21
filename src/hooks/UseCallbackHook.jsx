import { useState, useCallback, useMemo, useEffect } from "react";

import List from "../components/List";

const UseCallbackHook = () => {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	// NOTE: Once you update the state in React, It's going to re-render your entire component!
	// So It's going to run this entire function component from top to bottom.

	const getItems = useCallback(() => {
		return () => {
			return [number, number + 1, number + 2];
		};
	}, [number]);

	const theme = useMemo(
		() => ({
			backgroundColor: dark ? "#333" : "#fff",
			color: dark ? "#fff" : "#333",
		}),
		[dark]
	);

	useEffect(() => {
		console.log("Theme changed!");
	}, [theme]);

	return (
		<div style={theme}>
			<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

			<button onClick={() => setDark((prevDark) => !prevDark)}>Toggle Theme</button>

			<List getItems={getItems} />
		</div>
	);
};

export default UseCallbackHook;
