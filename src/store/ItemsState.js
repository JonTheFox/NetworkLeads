import {
	//RecoilRoot,
	atom,
	//selector,
	//useRecoilState,
	//useRecoilValue,
} from "recoil";

const ItemsState = atom({
	key: "ItemsState",
	default: [],
});

export default ItemsState;
