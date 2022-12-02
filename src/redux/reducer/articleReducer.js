import { FETCH_START, SUCCESS_GET_ARTICLE } from "../action/articleAction";

const initialState = {
  data: [],
  isLoading: false,
  err: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_GET_ARTICLE:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};

export default articleReducer;