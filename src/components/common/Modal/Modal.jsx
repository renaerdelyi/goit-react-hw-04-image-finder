import React, { Component } from 'react';

 class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleClickOverlay}>
        <div className="modal">
          <img src={this.props.imageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;