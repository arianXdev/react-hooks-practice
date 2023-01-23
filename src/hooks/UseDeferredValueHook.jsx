import { useDeferredValue, useState, useMemo, useEffect } from "react";

const List = ({ value }) => {
	const list = useMemo(() => {
		const numbersList = [];
		let count = 0;

		while (count <= 5000) {
			numbersList.push(<div key={count}>{`The number is equal to ${value}`}</div>);
		}

		return numbersList;
	}, [value]);

	useEffect(() => {
		console.log(`Value: ${value}`);
	}, [value]);

	return list;
};

const UseDeferredValueHook = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};

export default UseDeferredValueHook;
