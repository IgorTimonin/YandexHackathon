import './app.scss'
import Slider from './blocks/slider/slider.js';
import Popup from './blocks/popup/popup';
import './blocks/quizz-form/quizz-form.js';

const slider = new Slider({
  sliderSelector: '.slider',
  prevBtnSelector: '.slider__control_type_prev',
  nextBtnSelector: '.slider__control_type_next',
  sliderContainerSelector: '.slider__inner',
  sliderItemSelector: '.slider__item',
  slidesInRow: 3,
})

const popup = new Popup({
  popupSelector: '.popup_type_quizz',
  openedClass: 'popup_opened',
  closeBtnSelector: '.popup__close-btn',
});

const startQuizzBtn = document.querySelector('.quizz__btn');
startQuizzBtn.addEventListener('click', () => popup.open());

popup.addListeners();
slider.enable();
