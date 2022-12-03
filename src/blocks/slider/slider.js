class Slider {
  constructor({
    sliderSelector,
    prevBtnSelector,
    nextBtnSelector,
    sliderContainerSelector,
    sliderItemSelector,
    // slidesInRow,
  }) {
    this._sliderElement = document.querySelector(sliderSelector);
    this._prevBtn = this._sliderElement.querySelector(prevBtnSelector);
    this._nextBtn = this._sliderElement.querySelector(nextBtnSelector);
    this._container = this._sliderElement.querySelector(
      sliderContainerSelector
    );
    this._slidesNumber =
      this._sliderElement.querySelectorAll(sliderItemSelector).length;
    // this._step = 397; // хардкод для десктопа, убрать если будет время
    this._currentSlide = 0;
    this._slidesInRow = null;
    // slidesInRow;
  }

  _setBtnDisabled(btn, isDisable) {
    if (isDisable) {
      btn.setAttribute('disabled', '');
    } else {
      btn.removeAttribute('disabled');
    }
  }

  _changeCurrentSlide(value) {
    const newSlideNumber = this._currentSlide + value;
    if (newSlideNumber <= 0) {
      this._setBtnDisabled(this._prevBtn, true);
    } else {
      this._setBtnDisabled(this._prevBtn, false);
    }
    if (newSlideNumber >= this._slidesNumber - this._slidesInRow) {
      this._setBtnDisabled(this._nextBtn, true);
    } else {
      this._setBtnDisabled(this._nextBtn, false);
    }
    this._currentSlide = newSlideNumber;
  }

  _moveSlides() {
    const pageWidth = document.documentElement.clientWidth;
    let step = null;
    if (pageWidth <= 500) {
      step = 349;
      this._slidesInRow = 1;
    } else {
      step = 397;
      this._slidesInRow = 3;
    }
    //корректировка смещения для mobile view
    let shift = null;
      if ( pageWidth <= 500 ) {
        shift = -(this._currentSlide - 0.058) * step;
      }
      else shift = -(this._currentSlide * step);

    // const shift = -(this._currentSlide * step);
    this._container.style.transform = `translateX(${shift}px)`;
  }

  _moveBack() {
    this._changeCurrentSlide(-1);
    this._moveSlides();
  }

  _moveForward() {
    this._changeCurrentSlide(1);
    this._moveSlides();
  }

  _addListeners() {
    this._nextBtn.addEventListener('click', () => this._moveForward());
    this._prevBtn.addEventListener('click', () => this._moveBack());
  }

  enable() {
    this._addListeners();
    this._changeCurrentSlide(0);
  }
}

export default Slider;
