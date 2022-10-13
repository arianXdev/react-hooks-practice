import { useRef, useState, useEffect } from "react";

const UseRefPractice = () => {
	const [name, setName] = useState("");

	const inputRef = useRef(null);
	const listRef = useRef(null);

	useEffect(
		() => {
			inputRef.current.focus();
		},
		// dependercy array
		[] // It only runs in the Mounting lifecycle
	);

	const handleClearInput = (e) => {
		// setName(""); // The best way to do this but I don't want to do it in this way! I want to clear the input with useRef Hook to practice...

		const inputElement = inputRef.current; // access to the input using refs

		inputElement.value = "";
		setName("");
		inputElement.focus(); // focus on the input after clearing
	};

	const handleAddName = () => {
		const ulElement = listRef.current;
		const inputElement = inputRef.current;

		if (name !== "") {
			ulElement.innerHTML += `<li>${name}</li>`;
			setName(""); // clear the input value after adding a name
			inputElement.focus(); // focus on the input after adding an item
		}
	};

	const handleClearNames = () => {
		const ulElement = listRef.current; // access to the <ul> tag

		ulElement.innerHTML = "";
	};

	return (
		<div className="container">
			<div className="d-flex justify-content-center align-items-center flex-column">
				<ul ref={listRef}></ul>

				<input
					ref={inputRef}
					type="text"
					className="form-control w-50"
					placeholder="Give me your beautiful name..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<div className="buttonGroup mt-3">
					<button className="btn btn-outline-primary mx-2" onClick={handleAddName}>
						Add
					</button>
					<button className="btn btn-outline-danger mx-2" onClick={handleClearInput}>
						Clear Input
					</button>
					<button className="btn btn-outline-danger mx-2" onClick={handleClearNames}>
						Clear Names
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseRefPractice;
