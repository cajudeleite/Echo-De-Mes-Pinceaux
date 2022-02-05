export const GET_STATUSES_FROM_API = 'GET_STATUSES_FROM_API';

export const getStatusesFromApi = () => ({
  type: GET_STATUSES_FROM_API,
});

export const SET_STATUS = 'SET_STATUS';

export const setStatus = (newStatusValue) => ({
  type: SET_STATUS,
  newStatusValue,
});
