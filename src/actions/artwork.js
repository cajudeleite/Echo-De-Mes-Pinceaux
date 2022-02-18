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

export const UPDATE_ARTWORK = 'UPDATE_ARTWORK';

export const updateArtwork = (id, title, year, technique, collection, status, description, photo) => ({
  type: UPDATE_ARTWORK,
  id,
  title,
  year,
  technique,
  collection,
  status,
  description,
  photo,
});

export const DELETE_ARTWORK = 'DELETE_ARTWORK';

export const deleteArtwork = (id) => ({
  type: DELETE_ARTWORK,
  id,
})

export const SET_ITEM_ID = 'SET_ITEM_ID';

export const setItemId = (id) => ({
  type: SET_ITEM_ID,
  id,
})

export const SET_FORM_METHOD = 'SET_FORM_METHOD';

export const setFormMethod = (method) => ({
  type: SET_FORM_METHOD,
  method,
})
