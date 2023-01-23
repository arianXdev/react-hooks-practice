import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

const UseImperativeHandleHook = () => {
	const inputRef = useRef(null);

	const handleFocus = () => inputRef.current.focus();

	return (
		<div>
			useImperativeHandle Hook
			<input ref={inputRef} type="text" />
			<button onClick={handleFocus}>Focus on the input!</button>
		</div>
	);
};

export default UseImperativeHandleHook;
