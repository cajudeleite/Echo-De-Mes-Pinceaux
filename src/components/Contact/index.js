import './styles.scss';
import ContactForm from './form';
import ContactList from './list';

const Contact = () => {

  const logged = localStorage.getItem('logged') === 'true';

  return (
    <section className="contact">
      {!logged && <div className="contact__container">
        <h1 className='contact__container__title'>Formulaire de contact</h1>
        <ContactForm />
      </div>}
      {logged && <ContactList />}
    </section>
  );
};

export default Contact;
