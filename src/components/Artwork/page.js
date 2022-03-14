import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const Page = ({length}) => {
  const [cookies, setCookie] = useCookies(['artworkPage']);
  console.log(length)
  return (
    <div className="artwork__item__page">
      {cookies.artworkPage > 1 && <p className='artwork__item__page__arrows' onClick={() => {
        setCookie('artworkPage', (parseInt(cookies.artworkPage, 10) - 1), {
          path: "/"
        });
        window.location.reload();
        window.scroll(0, 0)
      }}><FontAwesomeIcon icon={faLeftLong} /></p>}
      <p className='artwork__item__page__current'>{`Page ${cookies.artworkPage}`}</p>
      {length / cookies.artworkPage > 10 && <p className='artwork__item__page__arrows' onClick={() => {
        setCookie('artworkPage', (parseInt(cookies.artworkPage, 10) + 1), {
          path: "/"
        });
        window.location.reload();
        window.scroll(0, 0)
      }}><FontAwesomeIcon icon={faRightLong} /></p>}
    </div>
  );
};

Page.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Page;
