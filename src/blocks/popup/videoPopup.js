import Popup from "./popup";

class VideoPopup extends Popup {
  constructor({ popupSelector, openedClass, closeBtnSelector, videoIframeSelector }) {
    super({ popupSelector, openedClass, closeBtnSelector });
    this._videoIframe = this._popupElement.querySelector(videoIframeSelector);
  }

  close() {
    super.close();
    this._videoIframe.setAttribute('src', '');
  }

  open(videoSource) {
    this._videoIframe.setAttribute('src', videoSource);
    super.open();
  }
}

export default VideoPopup;
