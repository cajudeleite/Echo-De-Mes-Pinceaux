export const POST_ARTWORK = 'POST_ARTWORK';

export const postArtwork = (title, year, technique, collection, status, photo, description) => ({
  type: POST_ARTWORK,
  title,
  year,
  technique,
  collection,
  status,
  photo,
  description,
});
