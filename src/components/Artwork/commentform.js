import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../actions/comment';

const CommentForm = ({artworkId, setAlert}) => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='artwork__item__comments__form_container'>
      <form action="" className="artwork__item__comments__form_container__form" onSubmit={(event) => {
        event.preventDefault();
        dispatch(postComment(username, message, artworkId));
        setAlert(true);
      }}>
        <div className="artwork__item__comments__form_container__form__username">
          <label htmlFor='comment__input' className='artwork__item__comments__form_container__form__username__label'>Nom d'utilisateur :</label>
          <input
            type="text"
            id='username__input'
            className='artwork__item__comments__form_container__form__username__input'
            placeholder=''
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        {username && <div className="artwork__item__comments__form_container__form__message">
          <label htmlFor='comment__input' className='artwork__item__comments__form_container__form__message__label'>Message :</label>
          <input
            type="text"
            id='message__input'
            className='artwork__item__comments__form_container__form__message__input'
            placeholder=''
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </div>}
        {username && message && <input type="submit" className="artwork__item__comments__form_container__form__submit" />}
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  artworkId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default CommentForm;
