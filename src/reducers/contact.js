import { SET_CONTACT } from "../actions/contact";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTACT: {
      return {
        ...state,
        list: action.contact,
      };
    }
    default:
      return state;
  }
};

export default reducer;
