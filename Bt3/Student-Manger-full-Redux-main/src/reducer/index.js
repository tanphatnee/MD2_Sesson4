import { combineReducers } from "redux";
import { filter } from "./filter";
import { listStudent } from "./listStudent";

export const reducer = combineReducers({ filter, listStudent });
