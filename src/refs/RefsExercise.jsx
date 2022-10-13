import { Component, createRef } from "react";

// Refs in Class Components
class RefsExercise extends Component {
	constructor() {
		super();

		this.inputRef = createRef();
		this.listRef = createRef();

		this.handleClearInput = this.handleClearInput.bind(this);
	}

	state = {
		name: "",
	};

	componentDidMount() {
		// Focus on the input after rendering
		const inputEl = this.inputRef.current;
		inputEl.focus();
	}

	handleAddName = () => {
		const ulEl = this.listRef.current;
		const inputEl = this.inputRef.current;

		if (this.state.name !== "") {
			ulEl.innerHTML += `<li>${this.state.name}</li>`;
			this.setState({ name: "" });
			inputEl.focus();
		}
	};

	handleClearInput() {
		// this.setState({ name: "" }); // The best way to do this but I don't want to do it in this way! I want to clear the input with refs to practice...

		const inputEl = this.inputRef.current;

		inputEl.value = "";
		this.setState({ name: "" });
		inputEl.focus();
	}

	handleClearNames = () => {
		const ulElement = this.listRef.current;

		ulElement.innerHTML = "";
	};

	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center align-items-center flex-column">
					<ul ref={this.listRef}></ul>

					<input
						ref={this.inputRef}
						type="text"
						className="form-control w-50"
						placeholder="Give me your beautiful name..."
						value={this.state.name}
						onChange={(e) => this.setState({ name: e.target.value })}
					/>

					<div className="buttonGroup mt-3">
						<button className="btn btn-outline-primary mx-2" onClick={this.handleAddName}>
							Add
						</button>
						<button className="btn btn-outline-danger mx-2" onClick={this.handleClearInput}>
							Clear Input
						</button>
						<button className="btn btn-outline-danger mx-2" onClick={this.handleClearNames}>
							Clear Names
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RefsExercise;
