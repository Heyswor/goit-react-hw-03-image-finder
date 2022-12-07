import React, { Component } from 'react';

import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }

  handleEscPress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { imgLink, imgAlt, onClose } = this.props;
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={imgLink} alt={imgAlt} onClick={onClose} />
        </div>
      </div>
    );
  }
}
