import './styles.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { useCookies } from 'react-cookie';

const PageAlert = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['reload']);
  const title = useSelector((state) => state.alert.title);
  const button = useSelector((state) => state.alert.button);
  const route = useSelector((state) => state.alert.route);

  const method = () => {
    if (route === 'reload') {
      window.location.reload();
    } if (route === '/ reload') {
      setCookie('reload', 'true', {
        path: "/"
      });
      history.push('/');
    } else {
      history.push(route);
    }
    if (title === 'Votre réalisation artistique a été publiée avec succès') {
      removeCookie('artworkTitre');
      removeCookie('artworkAnnée');
      removeCookie('artworkTechniques');
      removeCookie('artworkCollections');
      removeCookie('artworkStatus');
      removeCookie('artworkPhoto');
      removeCookie('artworkDescrition');
      removeCookie('artworkMethod');
    } else if (title === 'Votre réalisation artistique a été modifiée avec succès') {
      removeCookie('artworkTitre');
      removeCookie('artworkAnnée');
      removeCookie('artworkTechniques');
      removeCookie('artworkCollections');
      removeCookie('artworkStatus');
      removeCookie('artworkPhoto');
      removeCookie('artworkDescrition');
      removeCookie('artworkId');
      removeCookie('artworkMethod');
    }
    dispatch(setAlert('Error', 'OK', '/'));
  }

  return (
    <div className="page_alert">
      <h1 className='page_alert__title'>{title}</h1>
      <button className='page_alert__submit' onClick={() => method()}>{button}</button>
    </div>
  );
};

export default PageAlert;
