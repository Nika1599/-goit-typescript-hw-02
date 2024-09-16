import axios from "axios";
import { Image } from "../types";

const UNSPLASH_ACCESS_KEY = "gpOMHE6xgjMHjjReS638xAJcDkPfgl_bzC3WpqwkTpg";

type fetchImagesResponse = {
  results: Image[];
};

const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  const response = await axios.get<fetchImagesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: { query, page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  return response.data.results;
};

export { fetchImages };
