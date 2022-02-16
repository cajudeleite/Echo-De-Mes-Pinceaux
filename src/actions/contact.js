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

export const GET_CONTACT = 'GET_CONTACT';

export const getContact = () => ({
  type: GET_CONTACT,
});

export const SET_CONTACT = 'SET_CONTACT';

export const setContact = (contact) => ({
  type: SET_CONTACT,
  contact,
});
