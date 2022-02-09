import { SET_STATUS, SET_STATUS_NAME } from "../actions/status";

const initialState = {
  list: [],
  statusName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATUS: {
      return {
        ...state,
        list: action.newStatusValue,
      };
    }
    case SET_STATUS_NAME: {
      return {
        ...state,
        statusName: action.statusName,
      };
    }
    default:
      return state;
  }
};

export default reducer;
