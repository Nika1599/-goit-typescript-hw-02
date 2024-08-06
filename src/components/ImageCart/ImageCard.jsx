const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
