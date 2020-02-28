/* Индекс слайда по умолчанию */
let slideIndex = 1;
// тут считаем все слайдеры sliders и перебираем их в цикле и для каждого вызываем showSlides
let allSliders = document.querySelectorAll('.sliders');

for (let slider of allSliders) {
console.log(slider.classList[1]);
	// получаем каждый слайдер по его уникальному классу
	let sliderName = document.querySelector('.'+slider.classList[1]);

	showSlides(slideIndex, sliderName);
	controlElements(sliderName);
}



/* Основная функция слайдера */
function showSlides(n, sliderName) {
    let i;

    let slides = sliderName.querySelectorAll('.sliders__item');
    let dots = sliderName.querySelectorAll('.sliders-dots__item');

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
		dots[i].className = dots[i].className.replace(' '+'sliders-dots__item_active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' sliders'+'-dots__item_active';
}

function controlElements(sliderName) {

	/* Функция увеличивает индекс на 1, показывает следующий слайд*/
	function plusSlide() {
	    showSlides(slideIndex += 1, sliderName);
	}

	/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
	function minusSlide() {
	    showSlides(slideIndex -= 1, sliderName);  
	}

	/* Устанавливает текущий слайд */
	function currentSlide(n) {
	    showSlides(slideIndex = n, sliderName);
	}


	sliderName.querySelector('.sliders__prev').addEventListener('click', minusSlide);
	sliderName.querySelector('.sliders__next').addEventListener('click', plusSlide);


	let dots = sliderName.querySelectorAll('.sliders-dots__item');
	let k = 0;

	dots.forEach( (elem, k) => {
		k++;
		elem.addEventListener('click', function () {		
		    currentSlide(k);
		})	
	})
}