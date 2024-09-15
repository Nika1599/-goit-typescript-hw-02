import React from "react";
import { Image } from "../../types";

interface ImagecardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImagecardProps> = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
