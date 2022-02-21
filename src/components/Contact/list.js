import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../actions/contact';
import { useEffect } from 'react';
import ContactListItem from './listitem';
import PropTypes from 'prop-types';

const ContactList = ({setAlert}) => {

  const logged = localStorage.getItem('logged') === 'true';
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contact.list);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <div className="contact__list">
      {contactList.length > 0 && <h1 className="contact__list__title">Liste des messages de contact</h1>}
      {contactList.length === 0 && <h1 className="contact__list__title">Il n'y a pas de messages de contact</h1>}
      {contactList.map(
        (item) => <ContactListItem key={item.id} {...item} setAlert={setAlert} />
      )}
    </div>
  );
};

ContactList.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default ContactList;
