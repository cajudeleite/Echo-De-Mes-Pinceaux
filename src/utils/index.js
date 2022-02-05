export const simplifyList = (list) => (
  list.map(
    (item) => ({
      id: item.id,
      name: item.name,
    }),
  )
);
