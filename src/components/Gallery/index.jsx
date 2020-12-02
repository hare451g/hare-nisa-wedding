// time keys
import { TIME_KEYS } from '../../lib/timeChecker';
import { morningGallery, nightGallery, noonGallery } from './constants';
import { GalleryContainer, GalleryImage, Title } from './styled';

function Gallery({ time }) {
  const selection = {
    [TIME_KEYS.NIGHT]: nightGallery,
    [TIME_KEYS.NOON]: noonGallery,
    [TIME_KEYS.MORNING]: morningGallery,
  };
  return (
    <>
      <Title>Gallery</Title>
      <GalleryContainer>
        {selection[time].map(({ key, src }, index) => (
          <GalleryImage className={key} key={key} src={src} />
        ))}
      </GalleryContainer>
    </>
  );
}

export default Gallery;
