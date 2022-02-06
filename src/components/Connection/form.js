import './styles.scss';
import ItemText from './itemtext';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../actions/authenticate';

const ConnectionForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <form className="connection__container__form" encType='multipart/form-data' method="post" onSubmit={(event) => {
      event.preventDefault();
      dispatch(authenticate(username, password));
    }}>
      <ItemText value={username} setValue={setUsername} label="Nom d'utilisateur" type='text' />
      <ItemText value={password} setValue={setPassword} label='Mot de passe' type='password' />
      <input type="submit" className='connection__container__form__submit' />
    </form>
  );
};

export default ConnectionForm;
