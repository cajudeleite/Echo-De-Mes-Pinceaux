import { SET_ALERT } from "../actions/alert";

const initialState = {
  title: 'Error',
  button: 'OK',
  route: '/',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALERT: {
      return {
        ...state,
        title: action.title,
        button: action.button,
        route: action.route,
      };
    }
    default:
      return state;
  }
};

export default reducer;
