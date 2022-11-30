import './app.scss'
import Slider from './blocks/slider/slider.js';

const slider = new Slider({
  sliderSelector: '.slider',
  prevBtnSelector: '.slider__control_type_prev',
  nextBtnSelector: '.slider__control_type_next',
  sliderContainerSelector: '.slider__inner',
  sliderItemSelector: '.slider__item',
  slidesInRow: 3,
})

slider.enable();