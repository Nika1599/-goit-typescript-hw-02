import axios from "axios";

const UNSPLASH_ACCESS_KEY = "gpOMHE6xgjMHjjReS638xAJcDkPfgl_bzC3WpqwkTpg";

const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response.data.results;
};

export { fetchImages };
