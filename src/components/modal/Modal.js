import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        this.props.closeModal();
      }
    });
  }

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal(event.target);
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {<img src={this.props.largeImageURL} alt={this.props.tags} />}
        </div>
      </div>
    );
  }
}

export default Modal;
