import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  handleOpenModalClick = (event) => {
    this.props.openModalProp(event.target.getAttribute("src"));
    console.log(event.target.getAttribute("src"));
  };

  render() {
    return (
      <ul className="ImageGallery" onClick={this.handleOpenModalClick}>
        {this.props.imagesProp.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  imagesProp: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModalProp: PropTypes.func.isRequired,
};
