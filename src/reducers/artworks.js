import { SET_ITEM_ID } from "../actions/artwork";

const initialState = {
  item_id: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ITEM_ID: {
      return {
        ...state,
        item_id: action.id,
      };
    }
    default:
      return state;
  }
};

export default reducer;
