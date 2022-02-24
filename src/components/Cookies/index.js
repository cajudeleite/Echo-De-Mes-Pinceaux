import './styles.scss';
import PropTypes from 'prop-types';

const CookieCard = ({methodAccept, methodDecline}) => {

  return (
    <section className="cookies">
      <div className="cookies__container">
        <div className="cookies__container__card">
          <h2 className="cookies__container__card__title">Voulez vous accepter les cookies</h2>
          <div className="cookies__container__card__buttons">
            <button className="cookies__container__card__buttons__accept" onClick={() => {
              methodAccept("allowCookies", "true", {
                path: "/"
              });
              methodDecline(false);
            }}>Oui</button>
            <button className="cookies__container__card__buttons__decline" onClick={() => {
              methodDecline(false);
            }}>Non</button>
          </div>
        </div>
      </div>
      <div className="cookies__filter"></div>
    </section>
  );
};

CookieCard.propTypes = {
  methodAccept: PropTypes.func.isRequired,
  methodDecline: PropTypes.func.isRequired,
};

export default CookieCard;
