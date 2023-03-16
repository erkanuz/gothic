import { createStore } from "redux";
import rootred from "./reducer/main";

const store = createStore(
    rootred
)

export default store;