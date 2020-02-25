// import * as $ from 'jquery';
import 'air-datepicker';

import '../../common-files/ui-style.scss';

import '../../img/TOXIN_just_picture.svg';
import '../../img/room888_picture.png';
import '../../img/room840_picture.png';



$('.calendar').datepicker({
	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
    range: true,
});



/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slider__item');
    var dots = document.getElementsByClassName('slider-dots__item');

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
    
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
    for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' slider-dots__item_active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' slider-dots__item_active';
}


document.querySelector('.slider__prev').addEventListener('click', minusSlide);
document.querySelector('.slider__next').addEventListener('click', plusSlide);


let dots = document.querySelectorAll('.slider-dots__item');



// var addClickHandler = function (dot, i) {
//   dot.addEventListener('click', function () {
//     currentSlide(i);
//   })
// }

// for (let i = 0; i < dots.length; i++) {
//   addClickHandler(dots[i], i+1);
// }

let k = 0;

dots.forEach( (elem, k) => {
	k++;
	console.log(k); 
	elem.addEventListener('click', function () {		
	    currentSlide(k);	   

	})
	
})




console.log('in UIKit.js');