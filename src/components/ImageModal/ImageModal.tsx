import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import { Image } from "../../types";

interface ImageModalProps {
  isOpen: boolean;
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => window.addEventListener("keydown", handleKeyDown)}
      onAfterClose={() => window.removeEventListener("keydown", handleKeyDown)}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button onClick={onClose} className="modal-close-button">
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.description}
        className="modal-image"
      />
    </Modal>
  );
};

export default ImageModal;
