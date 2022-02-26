import { SET_COMMENT } from "../actions/comment";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COMMENT: {
      return {
        ...state,
        list: action.comment,
      };
    }
    default:
      return state;
  }
};

export default reducer;
