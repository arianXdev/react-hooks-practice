import { useState, useEffect, useMemo } from "react";

const UseMemoExample = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const doubleNumber = slowFunction(number);

	const themeStyles = {
		backgroundColor: dark ? "black" : "white",
		color: dark ? "white" : "black",
	};

	return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<input type="number" className="form-control w-50" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

			<button className="btn btn-block btn-info my-3" onClick={() => setDark((prevDark) => !prevDark)}>
				Change theme
			</button>

			<div className="alert alert-warning" style={themeStyles}>
				Result: {doubleNumber}
			</div>
		</div>
	);
};

const slowFunction = (num) => {
	console.log("Calling Slow Function");
	// for (let i = 0; i <= 1000000000; i++) {}
	return num * 2;
};

export default UseMemoExample;
