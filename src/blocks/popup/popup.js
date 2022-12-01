class Popup {
  constructor({ popupSelector, openedClass, closeBtnSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._openedClass = openedClass;
    this._closeBtn = this._popupElement.querySelector(closeBtnSelector);
    this._hadleEscClose = this._hadleEscClose.bind(this);
  }

  _hadleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add(this._openedClass);
    document.addEventListener('keydown', this._hadleEscClose);
  }

  close() {
    this._popupElement.classList.remove(this._openedClass);
    document.removeEventListener('keydown', this._hadleEscClose);
  }

  _handleClose(e) {
    if (e.target === e.currentTarget || e.target === this._closeBtn) {
      this.close();
    }
  }

  addListeners() {
    this._popupElement.addEventListener('click', (e) => this._handleClose(e));
  }
}

export default Popup;
