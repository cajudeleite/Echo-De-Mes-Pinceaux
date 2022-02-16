import './styles.scss';
import PropTypes from 'prop-types';

const ContactListItem = ({id, last_name, first_name, e_mail, title, message, artwork_id}) => {


  return (
    <div className="contact__list__item">
      <div className="contact__list__item__name">
        <h2>{first_name} {last_name}</h2>
      </div>
      <div className="contact__list__item__message">
        <div className="contact__list__item__message__top">
          <h2 className="contact__list__item__message__top__title">{title}</h2>
          <h2 className="contact__list__item__message__top__name">{e_mail}</h2>
        </div>
        <div className="contact__list__item__message__bottom">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  e_mail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  artwork_id: PropTypes.number.isRequired,
}

export default ContactListItem;
