import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";
import articleReducer from '../reducer/articleReducer';


const allReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;