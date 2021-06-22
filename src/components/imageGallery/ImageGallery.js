import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ imagesProp, openModalProp }) => {
  function handleOpenModalClick(event) {
    openModalProp(event.target.getAttribute("src"));
  }

  return (
    <ul className="ImageGallery" onClick={() => handleOpenModalClick()}>
      {imagesProp.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
        />
      ))}
    </ul>
  );
};

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
