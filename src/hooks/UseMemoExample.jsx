import { useState, useMemo, useEffect } from "react";

const getSuperSlower = (num) => {
	console.log("Super Slow Function is running...");

	let count = 0;

	while (count <= 1000000000) {
		count++;
	}

	return num * 2;
};

const UseMemoExample = () => {
	const [number, setNumber] = useState(0);
	const [colorChange, setColorChange] = useState(false);

	const doubleNumber = getSuperSlower(number);

	const appStyle = {
		backgroundColor: colorChange ? "cyan" : "white",
	};

	useEffect(() => {
		console.log("Background Changed!");
	}, [appStyle]);

	return (
		<div className="container">
			<div className="mx-auto mt-3 d-flex justify-content-center align-items-center w-75 flex-column" style={appStyle}>
				<input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Give me a number..." />

				<button type="button" className="btn btn-outline-info btn-block w-50 mt-3" onClick={() => setColorChange((prevColorChange) => !prevColorChange)}>
					Change the color
				</button>

				<div style={appStyle} className="text-center mx-auto mt-4">
					<p className="alert alert-warning">{`The Squared Number is equal : ${doubleNumber}`}</p>
				</div>
			</div>
		</div>
	);
};

export default UseMemoExample;
