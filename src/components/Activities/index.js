import './styles.scss';

const Activities = () => {

  return (
    <section className="contact">
      {!logged && !alert && <div className="contact__container">
        <h1 className='contact__container__title'>Formulaire de contact</h1>
        <ContactForm setAlert={setAlert} />
      </div>}
      {logged && !alert && <ContactList setAlert={setAlert} />}
      {alert && <PageAlert />}
    </section>
  );
};

export default Activities;
