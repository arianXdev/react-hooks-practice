import Accordion from "./components/Accordion";

import { RefsExercise, UseCallbackExample } from "./hooks";

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

				{/* <UseRefExample /> */}
				{/* <UseRefPractice /> */}

				<Accordion title="UseRef Example" heading="firstHeading">
					<RefsExercise />
				</Accordion>
				{/* <br /> */}
				{/* <Accordion title="UseMemo Example" heading="secondHeading">
					<UseMemoExample />
				</Accordion> */}
				<br />
				<Accordion title="UseCallback Exmaple" heading="fourthHeading">
					<UseCallbackExample />
				</Accordion>
			</div>
		</div>
	);
};

export default App;
