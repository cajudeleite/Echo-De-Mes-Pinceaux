import './styles.scss';
import ConnectionForm from './form';

const Connection = () => {

  return (
    <section className="connection">
      <div className="connection__container">
        <h1 className='connection__container__title'>Formulaire de connexion</h1>
        <ConnectionForm />
      </div>
    </section>
  );
};

export default Connection;
