import { useState,useEffect } from 'react';
import { fetchImages as fetchImagesApi } from '../services/imageApi';
import  Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './common/Button/Button';
import Modal from './common/Modal/Modal';
import LoaderSpinner from './Loader/Loader';
import "./styles.css/styles.css"

const App = () => {

  const[images, setImages] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const[query, setQuery] = useState('');
  const[page, setPage] = useState(1);
  const[totalHits, setTotalHits] = useState(0);
  const[isModalOpen, setIsModalOpen] = useState(false);
  const[modalImageURL, setModalImageURL] = useState('');

  useEffect(() => {
    if(query !== ''){
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const fetchImages = async (query, page) => {
    setIsLoading(true);

    try {
      const data = await fetchImages(query, page);
      setImages((prevState) => [...prevState.images, ...data.hits]);
        setTotalHits(data.totalHits);
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false);
    }
  };

 const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

 const handleImageClick = (imageURL) => {
  setIsModalOpen(true);
   setModalImageURL(imageURL);
  };

 const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageURL('');
  };

    return (
      <div>
        <Searchbar onSubmit={handleSubmit}/>
        {isLoading && <LoaderSpinner/>}
        <ImageGallery images={images} onClickImage={handleImageClick} />
        {images.length > 0 && !isLoading && <Button action={handleLoadMore} />}
        {isModalOpen && <Modal imageURL={modalImageURL} onClose={handleCloseModal} />}
      </div>
    );
  
}

export default App;
