import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../images.api";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSearch = async (query) => {
    setImages([]);
    const data = await fetchImages(query);
    setImages(data);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />;
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
