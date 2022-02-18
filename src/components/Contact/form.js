import './styles.scss';
import ItemText from './itemtext';
import ItemTextarea from './itemtextarea';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../../actions/contact';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const ContactForm = ({setAlert}) => {

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [eMail, setEMail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [artworkId, setArtworkId] = useState(1);
  const dispatch = useDispatch();
  const cookieNameArray = ['contactNom', 'contactPrènom', 'contactCouriel', 'contactSujet', 'contactMessage']
  const [cookies, setCookie, removeCookie] = useCookies(['contact']);
  const deleteCookieContact = () => {
    cookieNameArray.map((cookieName) => {
      removeCookie(cookieName);
    })
  };

  return (
    <form className="contact__container__form" encType='multipart/form-data' method="post" onSubmit={(event) => {
      event.preventDefault();
      dispatch(postContact(lastName, firstName, eMail, title, message, artworkId));
      setAlert(true);
      deleteCookieContact();
    }}>
      <ItemText value={lastName} setValue={setLastName} label='Nom'/>
      <ItemText value={firstName} setValue={setFirstName} label='Prènom'/>
      <ItemText value={eMail} setValue={setEMail} label='Couriel'/>
      <ItemText value={title} setValue={setTitle} label='Sujet'/>
      <ItemTextarea value={message} setValue={setMessage} label='Message'/>
      <input type="submit" className='contact__container__form__submit'/>
    </form>
  );
};

ContactForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default ContactForm;
