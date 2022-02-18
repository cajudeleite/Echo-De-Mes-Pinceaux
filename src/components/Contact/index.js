import './styles.scss';
import ContactForm from './form';
import ContactList from './list';
import PageAlert from '../PageAlert';
import { useState } from 'react';

const Contact = () => {

  const logged = localStorage.getItem('logged') === 'true';
  const [alert, setAlert] = useState(false);

  return (
    <section className="contact">
      {!logged && !alert && <div className="contact__container">
        <h1 className='contact__container__title'>Formulaire de contact</h1>
        <ContactForm setAlert={setAlert} />
      </div>}
      {!logged && alert && <PageAlert />}
      {logged && <ContactList />}

    </section>
  );
};

export default Contact;
