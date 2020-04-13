import Slider from './slider.js';

const slidersList = document.querySelectorAll('.js-slider');

slidersList.forEach( element => { new Slider(element) });
