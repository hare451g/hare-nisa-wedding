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
  const selected = selection[time] || [];
  return (
    <>
      <Title>Gallery</Title>
      <GalleryContainer>
        {selected.map(({ key, src }, index) => (
          <GalleryImage className={key} key={key} src={src} />
        ))}
      </GalleryContainer>
    </>
  );
}

export default Gallery;
