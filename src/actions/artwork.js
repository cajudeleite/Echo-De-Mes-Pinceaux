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
