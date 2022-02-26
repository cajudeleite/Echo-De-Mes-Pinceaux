export const simplifyList = (list) => (
  list.map(
    (item) => ({
      id: item.id,
      name: item.name,
    }),
  )
);

export const simplifyArtworks = (artworks) => (
  artworks.map(
    (artwork) => ({
      id: artwork.id,
      title: artwork.title,
      year_id: artwork.year_id,
      technique_id: artwork.technique_id,
      collection_id: artwork.collection_id,
      status_id: artwork.status_id,
      description: artwork.description,
      photo_id: artwork.photo_id,
    }),
  )
);

export const simplifyContact = (list) => (
  list.map(
    (item) => ({
      id: item.id,
      last_name: item.last_name,
      first_name: item.first_name,
      e_mail: item.e_mail,
      title: item.title,
      message: item.message,
      artwork_id: item.artwork_id,
    }),
  )
);

export const simplifyComment = (list) => (
  list.map(
    (item) => ({
      id: item.id,
      username: item.username,
      message: item.message,
      artwork_id: item.artwork_id,
      created_at: item.created_at,
    }),
  )
);
