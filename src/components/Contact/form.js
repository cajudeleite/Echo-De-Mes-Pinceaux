import './styles.scss';
import ItemText from './itemtext';
import ItemTextarea from './itemtextarea';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../../actions/contact';

const ContactForm = () => {

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [eMail, setEMail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [artworkId, setArtworkId] = useState(19);
  const dispatch = useDispatch();

  return (
    <form className="contact__container__form" encType='multipart/form-data' method="post" onSubmit={(event) => {
      event.preventDefault();
      dispatch(postContact(lastName, firstName, eMail, title, message, artworkId));
    }}>
      <ItemText value={lastName} setValue={setLastName} label='Nom'/>
      <ItemText value={firstName} setValue={setFirstName} label='Prénom'/>
      <ItemText value={eMail} setValue={setEMail} label='Couriel'/>
      <ItemText value={title} setValue={setTitle} label='Sujet'/>
      <ItemTextarea value={message} setValue={setMessage} label='Message'/>
      <input type="submit" className='contact__container__form__submit'/>
    </form>
  );
};

export default ContactForm;
