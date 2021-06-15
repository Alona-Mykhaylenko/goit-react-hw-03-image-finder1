import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

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
