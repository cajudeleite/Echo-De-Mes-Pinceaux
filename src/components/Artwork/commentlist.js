import './styles.scss';
import PropTypes from 'prop-types';
import CommentItem from './commentitem';

const CommentList = ({commentList, setAlert}) => {

  return (
    <div className="artwork__item__comments__list">
      {commentList.length === 0 && <h1 className="artwork__item__comments__list__title">Il n'y a pas de commentaires</h1>}
      {commentList.map(
        (comment) => <CommentItem key={comment.id} {...comment} setAlert={setAlert} />
      )}
    </div>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.array.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default CommentList;
