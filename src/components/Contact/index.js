import './styles.scss';
import ContactForm from './form';

const Contact = () => {

  return (
    <section className="contact">
      <div className="contact__container">
        <h1 className='contact__container__title'>Formulaire de contact</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
