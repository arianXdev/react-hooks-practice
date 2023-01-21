import Accordion from "./components/Accordion";

import { RefsExercise, UseCallbackExample, UseReducerExample, UseRefHook, UseMemoHook, UseCallbackHook } from "./hooks";

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

				{/* <Accordion title="UseRef Example" heading="firstHeading">
					<RefsExercise />
				</Accordion> */}
				{/* <br /> */}
				{/* <Accordion title="UseMemo Example" heading="secondHeading">
					<UseMemoExample />
				</Accordion> */}
				{/* <br />
				<Accordion title="UseCallback Exmaple" heading="fourthHeading">
					<UseCallbackExample />
				</Accordion>
				<br /> */}
				{/* <Accordion title="UseReducer Exmaple" heading="fifthHeading">
					<UseReducerExample />
				</Accordion> */}
				{/* <br />
				<Accordion title="UseRef Hook" headning="sixthHeading">
					<UseRefHook />
				</Accordion> */}
				{/* <br />
				<Accordion title="UseMemo Hook" headning="seventhHeading">
					<UseMemoHook />
				</Accordion> */}

				<br />
				<Accordion title="UseCallback Hook" headning="eighthHeading">
					<UseCallbackHook />
				</Accordion>
			</div>
		</div>
	);
};

export default App;
