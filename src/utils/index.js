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
