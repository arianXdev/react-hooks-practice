import UseRefExample from "./hooks/UseRefExample";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<div className="row pt-4">
					<div className="col">
						<h1 className="text-center mx-auto">Advanced React Hooks</h1>
					</div>
				</div>
				<hr />
			</div>

			<UseRefExample />
		</div>
	);
};

export default App;
