import { useEffect, useState } from "react";

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
		console.log("Updating Items...");
	}, [getItems]);

	return items.map((item, index) => <div key={index}>{item}</div>);
};

export default List;
