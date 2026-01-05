import {createStore} from "redux";
import todoReducer from "./reducers";
const Store=createStore(todoReducer);
export default Store;
