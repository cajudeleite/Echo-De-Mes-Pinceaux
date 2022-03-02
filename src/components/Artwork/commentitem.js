import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/comment';

const CommentItem = ({id, username, message, created_at, setAlert}) => {

  const dispatch = useDispatch();
  const logged = localStorage.getItem('logged') === 'true';
  const dateCropped = created_at.replace(/\T.*/, '');
  const date = dateCropped.split('-');

  return (
    <div className="artwork__item__comments__list__item">
      {logged && <button className="artwork__item__comments__list__item__message__delete" onClick={() => {
        dispatch(deleteComment(id));
        setAlert(true);
      }}><FontAwesomeIcon className="artwork__item__comments__list__item__message__delete__trash" icon={faTrashCan} /></button>}
      <div className="artwork__item__comments__list__item__name">
        <h2>{username}</h2>
      </div>
      <div className="artwork__item__comments__list__item__message">
        <h2 className="artwork__item__comments__list__item__message__date">{date[2]+' - '+date[1]+' - '+date[0]}</h2>
        <p className="artwork__item__comments__list__item__message__text">{message}</p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default CommentItem;
