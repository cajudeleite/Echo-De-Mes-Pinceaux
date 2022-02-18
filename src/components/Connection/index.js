import './styles.scss';
import ConnectionForm from './form';
import PageAlert from '../PageAlert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';

const Connection = () => {

  const [alert, setAlertValue] = useState(false);
  const dispatch = useDispatch();
  const logged = localStorage.getItem('logged') === 'true';
  if (logged) {
    dispatch(setAlert('Vous êtes déjà connectée', 'OK', '/'));
  }

  return (
    <section className="connection">
      {!alert && !logged && <div className="connection__container">
        <h1 className='connection__container__title'>Formulaire de connexion</h1>
        <ConnectionForm setAlert={setAlertValue} />
      </div>}
      {!alert && logged && <PageAlert />}
      {alert && <PageAlert />}
    </section>
  );
};

export default Connection;
