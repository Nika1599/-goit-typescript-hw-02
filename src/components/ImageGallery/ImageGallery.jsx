import ImageCard from "../ImageCart/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
