export const GET_YEARS_FROM_API = 'GET_YEARS_FROM_API';

export const getYearsFromApi = () => ({
  type: GET_YEARS_FROM_API,
});

export const SET_YEARS = 'SET_YEARS';

export const setYears = (newYearsValue) => ({
  type: SET_YEARS,
  newYearsValue,
});
