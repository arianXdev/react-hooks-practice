import { useState, useCallback, useEffect } from "react";

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
		console.log("Updating Items ...");
	}, [getItems]);

	return items.map((item, index) => <div key={index}>{item}</div>);
};

const UseCallbackExample = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	// NOTE: Once you update the state in React, It's going to re-render your entire component!
	// So It's going to run this entire function component from top to bottom.
	const getItems = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	const themeStyles = {
		backgroundColor: dark ? "black" : "white",
		color: dark ? "white" : "black",
	};

	useEffect(() => {
		console.log("Theme Changed!");
	}, [themeStyles]);

	return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<input type="number" className="form-control w-50" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

			<button className="btn btn-block btn-info my-3" onClick={() => setDark((prevDark) => !prevDark)}>
				Change theme
			</button>

			<div className="alert alert-warning" style={themeStyles}>
				<List getItems={getItems} />
			</div>
		</div>
	);
};

export default UseCallbackExample;
