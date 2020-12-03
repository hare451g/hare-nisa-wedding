import { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

// time keys
import { TIME_KEYS } from '../../lib/timeChecker';
import { morningGallery, nightGallery, noonGallery } from './constants';
import { GalleryContainer, GalleryImage, Title } from './styled';

const selection = {
  [TIME_KEYS.NIGHT]: nightGallery,
  [TIME_KEYS.NOON]: noonGallery,
  [TIME_KEYS.MORNING]: morningGallery,
};

function Gallery({ time }) {
  const [isOpen, setOpen] = useState(false);

  const selected = selection[time] || [];
  const sources = selected.map(({ src }) => src);

  return (
    <>
      <Title>Gallery</Title>
      <GalleryContainer>
        {selected.map(({ key, src }) => (
          <GalleryImage
            className={key}
            key={key}
            src={src}
            onClick={() => setOpen(true)}
          />
        ))}
      </GalleryContainer>
      <ReactBnbGallery
        show={isOpen}
        photos={sources}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Gallery;
