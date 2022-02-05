const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    /*case SET_ARTWORK: {
      return {
        ...state,
        list: action.newCollectionsValue,
      };
    }*/
    default:
      return state;
  }
};

export default reducer;
