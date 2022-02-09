export const POST_ARTWORK = 'POST_ARTWORK';

export const postArtwork = (title, year, technique, collection, status, description, photo) => ({
  type: POST_ARTWORK,
  title,
  year,
  technique,
  collection,
  status,
  description,
  photo,
});

export const GET_ARTWORKS = 'GET_ARTWORKS';

export const getArtworks = () => ({
  type: GET_ARTWORKS,
});

export const SET_ARTWORKS = 'SET_ARTWORKS';

export const setArtworks = (array) => ({
  type: SET_ARTWORKS,
  array,
});
