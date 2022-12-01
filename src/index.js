import './app.scss'
import Slider from './blocks/slider/slider.js';
import Popup from './blocks/popup/popup';
import './blocks/quizz-form/quizz-form.js';
import './blocks/vacancy/vacancy.js';

const slider = new Slider({
  sliderSelector: '.slider',
  prevBtnSelector: '.slider__control_type_prev',
  nextBtnSelector: '.slider__control_type_next',
  sliderContainerSelector: '.slider__inner',
  sliderItemSelector: '.slider__item',
  slidesInRow: 3,
})

slider.enable();

const quizzPopup = new Popup({
  popupSelector: '.popup_type_quizz',
  openedClass: 'popup_opened',
  closeBtnSelector: '.popup__close-btn',
});

quizzPopup.addListeners();

const startQuizzBtn = document.querySelector('.quizz__btn');
startQuizzBtn.addEventListener('click', () => quizzPopup.open());


const handleQuizzEnd = () => {
  quizzPopup.close();
  location.hash = '#vacancy';
}

const quizzResultButtons = document.querySelectorAll('.quizz-result__button');
quizzResultButtons.forEach(button => button.addEventListener('click', handleQuizzEnd))

const contactsPopup = new Popup({
  popupSelector: '.popup_type_contacts',
  openedClass: 'popup_opened',
  closeBtnSelector: '.popup__close-btn',
});

contactsPopup.addListeners();

const contactsFormBtn = document.querySelector('.vacancy__banner-button')
contactsFormBtn.addEventListener('click', () => contactsPopup.open());
