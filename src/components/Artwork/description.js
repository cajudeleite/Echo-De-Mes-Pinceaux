import './styles.scss';
import PropTypes from 'prop-types';

const Description = ({ text }) => {
  const textTreatment = (text) => {
    const à = /à/gi;
    const ù = /ù/gi;
    const è = /è/gi;
    const é = /é/gi;
    const µ = /µ/gi;
    let treatedText = text;
    treatedText = treatedText.replace(à, 'á');
    treatedText = treatedText.replace(ù, 'ú');
    treatedText = treatedText.replace(è, 'µ');
    treatedText = treatedText.replace(é, 'è');
    treatedText = treatedText.replace(µ, 'é');
    return treatedText;
  };

  if (text.match(/(?:www|https?)[^\s]+/g)) {
    let replace = text;
    if (!text.match(/(http(s?)):\/\//)) { replace = 'http://' + text };
    let linkText = replace.split('/')[2];
    if (linkText.substring(0, 3) == 'www') { linkText = linkText.replace('www.', '') };
    if (linkText.match(/youtu/)) {
      const youtubeID = text.replace(/.*=/, '');
      const source = `https://www.youtube.com/embed/${youtubeID}`;
      return (<div className="video-wrapper"><iframe src={source} frameBorder="0" style={{width: '100%'}} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>);
    } else {
      return (<a className='artwork__item__content__text__description__hyperlink' href={replace} target="_blank">{linkText}</a>);
    };
  }
  return (textTreatment(text));
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
