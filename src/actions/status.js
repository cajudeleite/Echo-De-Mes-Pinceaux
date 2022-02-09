export const GET_STATUSES_FROM_API = 'GET_STATUSES_FROM_API';

export const getStatusesFromApi = () => ({
  type: GET_STATUSES_FROM_API,
});

export const SET_STATUS = 'SET_STATUS';

export const setStatus = (newStatusValue) => ({
  type: SET_STATUS,
  newStatusValue,
});

export const GET_STATUS_NAME = 'GET_STATUS_NAME';

export const getStatusName = (id) => ({
  type: GET_STATUS_NAME,
  id,
});

export const SET_STATUS_NAME = 'SET_STATUS_NAME';

export const setStatusName = (statusName) => ({
  type: SET_STATUS_NAME,
  statusName,
});

export const POST_STATUS = 'POST_STATUS';

export const postStatus = (name) => ({
  type: POST_STATUS,
  name,
});
