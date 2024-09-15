import React, { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (image: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;

    if (image.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(image);
    form.reset();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </div>
  );
};

export default SearchBar;
