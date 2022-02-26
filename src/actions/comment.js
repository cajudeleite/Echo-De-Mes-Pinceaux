export const POST_COMMENT = 'POST_COMMENT';

export const postComment = (username, message, artwork_id) => ({
  type: POST_COMMENT,
  username,
  message,
  artwork_id,
});

export const GET_COMMENT = 'GET_COMMENT';

export const getComment = (artwork_id) => ({
  type: GET_COMMENT,
  artwork_id,
});

export const SET_COMMENT = 'SET_COMMENT';

export const setComment = (comment) => ({
  type: SET_COMMENT,
  comment,
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id,
});
