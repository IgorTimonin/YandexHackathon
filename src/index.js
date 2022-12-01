import './app.scss'
import Slider from './blocks/slider/slider.js';
import Popup from './blocks/popup/popup';
import VideoPopup from './blocks/popup/videoPopup';
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

//Появление сообщений при скролле в разделе Что Яндекс Практикум может дать тебе
// function onEntry(entry) {
//   entry.forEach((change) => {
//     if (change.isIntersecting) {
//       change.target.classList.add('what-give__show');
//     }
//   });
// }
// let options = { threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.what-give__animation');
// for (let elm of elements) {
//   observer.observe(elm);
// };

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

const videoPopup = new VideoPopup({
  popupSelector: '.popup_type_video',
  openedClass: 'popup_opened',
  closeBtnSelector: '.popup__close-btn',
  videoIframeSelector: '.popup__video-iframe'
});

videoPopup.addListeners();

const sliderVideoButtons = document.querySelectorAll('.slider__item-play-btn');
sliderVideoButtons.forEach(btn => btn.addEventListener('click', () => videoPopup.open(btn.dataset.source)));