import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getArtworks } from '../../actions/artwork';
import ArtworkItem from './item';

const ArtworkPage = () => {

  const dispatch = useDispatch();
  const [artworkArray, setArtworkArray] = useState([]);

  useEffect(() => {
    dispatch(getArtworks());
  });

  setArtworkArray(useSelector((state) => state.artworks.list))

  return (
    <section className='artwork'>
      <h1>Hello your in gallery</h1>
      <div className="artwork__list">
        {artworkArray.map(
          (artwork) => <ArtworkItem key={artwork.id} {...artwork}/>,
        )}
      </div>
    </section>
  );
};

export default ArtworkPage;
