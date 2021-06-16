import "./App.css";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import Loader from "react-loader-spinner";
import React, { Component } from "react";
import axios from "axios";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer 21692451-3e70a23032844ea22d5e1eb16";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: "",
    loading: false,
    showModal: false,
    chosenImage: "",
  };

  componentDidUpdate() {
    if (this.state.loading) {
      this.fetchImages();
    }
  }

  handleSearchWord = (searchWord) => {
    this.setState({ query: searchWord, loading: true, images: [] });
  };

  fetchImages = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=21692451-3e70a23032844ea22d5e1eb16&q=${this.state.query}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.currentPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
          loading: false,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  openModal = (clickedImage) => {
    this.setState({ showModal: true });
    this.setState({
      chosenImage: this.state.images.find(
        (image) => image.webformatURL === clickedImage
      ),
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, showModal, chosenImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchWord} />
        <ImageGallery imagesProp={images} openModalProp={this.openModal} />
        {images.length > 0 && !loading && (
          <Button fetchImagesProp={this.fetchImages} />
        )}
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {showModal && (
          <Modal
            largeImageURL={chosenImage.largeImageURL}
            tags={images.tags}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
