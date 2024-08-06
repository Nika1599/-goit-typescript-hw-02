import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../images.api";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    loadImages(searchQuery, 1);
  };

  const loadImages = async (searchQuery, page) => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchImages(searchQuery, page);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadImages(query, nextPage);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && !error && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
