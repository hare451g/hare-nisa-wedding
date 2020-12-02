const { nightGallery, noonGallery } = require('./constants');
const { GalleryContainer, GalleryImage, Title } = require('./styled');

function Gallery() {
  return (
    <>
      <Title>Gallery</Title>
      <GalleryContainer>
        {nightGallery.map(({ key, src }, index) => (
          <GalleryImage className={key} key={key} src={src} />
        ))}
      </GalleryContainer>
    </>
  );
}

export default Gallery;
