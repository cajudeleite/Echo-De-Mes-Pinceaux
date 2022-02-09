export const GET_YEARS_FROM_API = 'GET_YEARS_FROM_API';

export const getYearsFromApi = () => ({
  type: GET_YEARS_FROM_API,
});

export const SET_YEARS = 'SET_YEARS';

export const setYears = (newYearsValue) => ({
  type: SET_YEARS,
  newYearsValue,
});

export const GET_YEAR_NAME = 'GET_YEAR_NAME';

export const getYearName = (id) => ({
  type: GET_YEAR_NAME,
  id,
});

export const SET_YEAR_NAME = 'SET_YEAR_NAME';

export const setYearName = (yearName) => ({
  type: SET_YEAR_NAME,
  yearName,
});

export const POST_YEAR = 'POST_YEAR';

export const postYear = (name) => ({
  type: POST_YEAR,
  name,
});
