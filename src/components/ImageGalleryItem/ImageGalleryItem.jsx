import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.handleToggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <li
        key={image.id}
        className={css.galleryItem}
        onClick={this.handleToggleModal}
      >
        <img src={image.webformatURL} alt={image.tags} width="400" />
        {this.state.isModalOpen && (
          <Modal
            onClose={this.handleToggleModal}
            imgLink={image.largeImageURL}
            imgAlt={image.tags}
          />
        )}
      </li>
    );
  }
}
