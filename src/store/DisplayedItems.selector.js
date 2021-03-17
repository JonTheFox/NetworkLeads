import { selector } from "recoil";
import ItemsState from "./ItemsState.js";
import CategoryState from "./CategoryState.js";

const DisplayedItemsState = selector({
	key: "DisplayedItemsState",
	default: [],
	get: ({ get }) => {
		const allItems = get(ItemsState);
		const category = get(CategoryState);

		const filteredItems = allItems.filter((item, i) => {
			return category === "all" || item.category === category?.name;
		});

		return filteredItems;
	},
});

export default DisplayedItemsState;
