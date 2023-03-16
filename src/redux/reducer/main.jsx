import { combineReducers } from "@reduxjs/toolkit";
import { cartreducer, usereducer } from "./reducer";

const rootred = combineReducers({
    cartreducer , usereducer
});

export default rootred