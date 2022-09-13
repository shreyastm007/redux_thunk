import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { useReducer, userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    userList: userReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);
export default store;