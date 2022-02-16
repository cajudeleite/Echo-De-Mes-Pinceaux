import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../actions/contact';
import { useEffect } from 'react';
import ContactListItem from './listitem';

const ContactList = () => {

  const logged = localStorage.getItem('logged') === 'true';
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contact.list);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <div className="contact__list">
      <h1>Liste des messages de contact</h1>
      {contactList.map(
        (item) => <ContactListItem key={item.id} {...item} />
      )}
    </div>
  );
};

export default ContactList;
