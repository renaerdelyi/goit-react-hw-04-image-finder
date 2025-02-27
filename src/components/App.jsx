import React, { Component } from 'react';
import { fetchImages } from '../services/imageApi';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './common/Button/Button';
import Modal from './common/Modal/Modal';
import LoaderSpinner from './Loader/Loader';
import "./styles.css/styles.css"

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    page: 1,
    totalHits: 0,
    isModalOpen: false,
    modalImageURL: '',
  };

  handleSubmit = (query) => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(query, page);
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
        isLoading: false,
      }));
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchImages);
  };

  handleImageClick = (imageURL) => {
    this.setState({ isModalOpen: true, modalImageURL: imageURL });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalImageURL: '' });
  };

  render() {
    const { images, isLoading, isModalOpen, modalImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        {isLoading && <LoaderSpinner/>}
        <ImageGallery images={images} onClickImage={this.handleImageClick} />
        {images.length > 0 && !isLoading && <Button action={this.handleLoadMore} />}
        {isModalOpen && <Modal imageURL={modalImageURL} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

