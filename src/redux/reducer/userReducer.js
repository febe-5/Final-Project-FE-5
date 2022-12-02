import { GET_USER } from "../action/userAction";

const initialState = {
  user: [],
};

export default function listUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
}