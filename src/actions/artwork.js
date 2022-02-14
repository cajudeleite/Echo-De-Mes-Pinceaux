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

export const SET_ITEM_ID = 'SET_ITEM_ID';

export const setItemId = (id) => ({
  type: SET_ITEM_ID,
  id,
})
