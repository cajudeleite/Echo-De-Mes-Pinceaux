export const POST_CONTACT = 'POST_CONTACT';

export const postContact = ( last_name, first_name, e_mail, title, message, artwork_id ) => ({
  type: POST_CONTACT,
  last_name,
  first_name,
  e_mail,
  title,
  message,
  artwork_id,
});
