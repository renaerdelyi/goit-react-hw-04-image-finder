import axios from 'axios'; 

export const fetchImages = async (query, page) => {
  const url = 'https://pixabay.com/api/?key=48986611-c492bb458e8c24f6619a5a131&q=yellow+flowers&image_type=photo';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};