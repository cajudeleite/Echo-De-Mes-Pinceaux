import './styles.scss';
import PropTypes from 'prop-types';
import CommentForm from './commentform';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getComment } from '../../actions/comment';
import CommentList from './commentlist';

const Comments = ({artworkId, setAlert}) => {

  const comments = useSelector((state) => state.comment.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment(artworkId));
  }, []);

  return (
    <div className='artwork__item__comments'>
      <CommentForm artworkId={artworkId} setAlert={setAlert} />
      <CommentList commentList={comments} setAlert={setAlert} />
    </div>
  );
};

Comments.propTypes = {
  artworkId: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Comments;
