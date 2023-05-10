import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import dogReducer from "./reducers/dogReducer";

const store = createStore(dogReducer, composeWithDevTools())

export default store