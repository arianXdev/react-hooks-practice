import { useState, useEffect, useLayoutEffect } from "react";

// Steps before useEffect hook run
// 1- user takes an action -> like triggring an event
// 2- React changes the state
// 3- React handles the DOM mutation (useLayoutEffect)
// 3 --->>> Here is where useLayoutEffect would be run! before printing the DOM and after React calculates the DOM changes
// 4- The Browser prints DOM Changes to the browser screen
// 5- After browser prints DOM changes to the screen, then useEffect fires (useEffect)

// When does useLayoutEffect run?
// useLayoutEffect runs synchronously between when React calculates your dom and when it actually paints it out to the screen

// When to use useLayoutEffect? useLayoutEffect HURT performance! Don't overuse it!
// 1. When you can't get the result that you want from useEffect, you can use useLayoutEffect
// 2. When you want your app layout to be ready before the browser is gonna display the app completely
// 3. When you used useEffect before, but you haven't gotten the result that you wanted to get, So you use useLayoutEffect in here

const UseLayoutEffectHook = () => {
	const [count, setCount] = useState(0);

	// useEffect would be run asynchrounously
	useEffect(() => {
		console.log(`useEffect: ${count}`);
	}, [count]);

	// useLayoutEffect would be run synchrounously
	useLayoutEffect(() => {
		console.log(`useLayoutEffect: ${count}`);
	}, [count]);

	return (
		<div className="d-flex justify-content-center align-items-center flex-column-reverse">
			<button onClick={() => setCount((prevCount) => prevCount + 1)} className="btn btn-warning">
				Count UP!
			</button>
			<p>Your Count is equal to {count}</p>
		</div>
	);
};

export default UseLayoutEffectHook;
