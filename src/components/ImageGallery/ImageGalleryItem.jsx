import React from 'react';

const ImageGalleryItem = ({ image, onClickImage }) => {
  return (
    <li
      className="gallery-item"
      onClick={() => onClickImage(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
