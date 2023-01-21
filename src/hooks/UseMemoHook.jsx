import { useMemo, useState, useEffect } from "react";

const keepGoingSlowly = (num) => {
	console.log("Keep going super slowly! Lazyyyyy!");

	let count = 0;
	while (count <= 999999999) {
		count++;
	}
	return num * 2;
};

const UseMemoHook = () => {
	const [number, setNumber] = useState(0);
	const [color, setColor] = useState(false);

	const doubleNum = useMemo(() => keepGoingSlowly(number), [number]);

	const styles = useMemo(
		() => ({
			backgroundColor: color ? "cyan" : "white",
		}),
		[color]
	);

	useEffect(() => {
		console.log("Yea! Background changed!");
	}, [styles]); // dependency array

	return (
		<div>
			<h1>Hello Everybody!</h1>
			<input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Give me a number!" />
			<button className="btn btn-outline-info" onClick={() => setColor((prevColor) => !prevColor)}>
				Change the color!
			</button>
			<div style={styles}>
				<p className="alert">{`Result: ${doubleNum}`}</p>
			</div>
		</div>
	);
};

export default UseMemoHook;
