const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
