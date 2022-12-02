import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articleReducer from '../reducer/articleReducer';

const allReducer = combineReducers({
  article: articleReducer,
  // user: userReducer,
  // product: productReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store