import { SET_ITEM_ID, SET_FORM_METHOD } from "../actions/artwork";

const initialState = {
  item_id: 1,
  method: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ITEM_ID: {
      return {
        ...state,
        item_id: action.id,
      };
    }
    case SET_FORM_METHOD: {
      return {
        ...state,
        method: action.method,
      };
    }
    default:
      return state;
  }
};

export default reducer;
