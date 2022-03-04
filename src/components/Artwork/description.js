import './styles.scss';
import PropTypes from 'prop-types';

const Description = ({ text }) => {
  if (text.match(/(?:www|https?)[^\s]+/g)) {
    let replace = text;
    if (!text.match(/(http(s?)):\/\//)) { replace = 'http://' + text };
    let linkText = replace.split('/')[2];
    if (linkText.substring(0, 3) == 'www') { linkText = linkText.replace('www.', '') };
    if (linkText.match(/youtu/)) {
      const youtubeID = text.replace(/.*=/, '');
      const source = `https://www.youtube.com/embed/${youtubeID}`;
      return (<div className="video-wrapper"><iframe src={source} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>);
    } else {
      return (<a className='artwork__item__content__text__description__hyperlink' href={replace} target="_blank">{linkText}</a>);
    };
  }
  return (text);
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
