import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";


const allReducer = combineReducers({
  user: userReducer
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;