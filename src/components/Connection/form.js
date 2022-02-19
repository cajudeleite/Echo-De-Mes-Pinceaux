import './styles.scss';
import ItemText from './itemtext';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../actions/authenticate';
import { useCookies } from 'react-cookie';

const ConnectionForm = ({setAlert}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['inputFocus']);

  useEffect(() => {
    if (cookies.inputFocus) {
      document.querySelector("#nomdutilisateur").focus();
      removeCookie('inputFocus');
    };
  }, []);

  return (
    <form className="connection__container__form" encType='multipart/form-data' method="post" onSubmit={(event) => {
      event.preventDefault();
      dispatch(authenticate(username, password));
      setAlert(true);
    }}>
      <ItemText value={username} setValue={setUsername} label="Nom d'utilisateur" type='text' />
      <ItemText value={password} setValue={setPassword} label='Mot de passe' type='password' />
      <input type="submit" className='connection__container__form__submit' />
    </form>
  );
};

ConnectionForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default ConnectionForm;
