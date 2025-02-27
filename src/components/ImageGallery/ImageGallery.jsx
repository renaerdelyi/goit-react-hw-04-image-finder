
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClickImage={onClickImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
