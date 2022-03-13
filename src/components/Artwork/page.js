import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const Page = ({length}) => {
  const [cookies, setCookie] = useCookies(['artworkPage']);
  console.log(length)
  return (
    <div className="artwork__item__comments__list">
      <p onClick={() => {
        setCookie('artworkPage', (parseInt(cookies.artworkPage, 10) - 1), {
          path: "/"
        });
        window.location.reload();
      }}>avant</p>
      <p onClick={() => {
        setCookie('artworkPage', (parseInt(cookies.artworkPage, 10) + 1), {
          path: "/"
        });
        window.location.reload();
      }}>après</p>
    </div>
  );
};

Page.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Page;
