// Все слайдеры c классом sliders перебираем в цикле и для каждого вызываем showSlides
let allSliders = document.querySelectorAll('.sliders');

for (let slider of allSliders) {
	// Получаем каждый слайдер по его уникальному классу
	let sliderName = document.querySelector('.'+slider.classList[1]);

	// Индекс слайда по умолчанию
	let slideIndex = 1;

	showSlides(slideIndex, sliderName);
	controlElements(slideIndex, sliderName);
}


// Основная функция слайдера
function showSlides(slideIndexNow, sliderName) {
	let slideIndex = slideIndexNow;
console.log('slideIndex='+slideIndex);
console.log('slideIndexNow='+slideIndexNow);

    let slides = sliderName.querySelectorAll('.sliders__item');
		if (slideIndexNow > slides.length) {
			slideIndex = 1;
		}
		if (slideIndexNow < 1) {
			slideIndex = slides.length;
		}

    let dots = sliderName.querySelectorAll('.sliders-dots__item');
// Если слайдер будет работать через dots
		if (dots.length) {
			for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}
		    for (let i = 0; i < dots.length; i++) {
					dots[i].className = dots[i].className.replace(' sliders-dots__item_active', '');
		    	}    
		    dots[slideIndex - 1].className += ' sliders-dots__item_active';
		}
console.log('slideIndex='+slideIndex);
    slides[slideIndex - 1].style.display = 'block';
}

function controlElements(slideIndexNow, sliderName) {
	// Функция уменьшает индекс на 1, показывает предыдущий слайд
	function minusSlide(slideIndexNow) {
		slideIndexNow =- 1;
	    showSlides(slideIndexNow, sliderName);
	}

	// Функция увеличивает индекс на 1, показывает следующий слайд
	function plusSlide (slideIndexNow) {
		slideIndexNow++;
	    showSlides(slideIndexNow, sliderName);
	}

	// Устанавливает текущий слайд
	function currentSlide(k) {
	    showSlides(slideIndex = k, sliderName);
console.log('slideIndex current='+slideIndex);	    
	}

	let sliderPrev = sliderName.querySelector('.sliders__prev')
	// 	if (sliderPrev) 
			sliderPrev.addEventListener('click', function () {		
				    minusSlide(slideIndexNow);
				});
	let sliderNext = sliderName.querySelector('.sliders__next')
	// 	if (sliderNext) 
			sliderNext.addEventListener('click', function () {		
				    plusSlide(slideIndexNow);
				});

	let dots = sliderName.querySelectorAll('.sliders-dots__item');
		if (dots) {
			let k = 0;
			dots.forEach( (elem, k) => {
				k++;
				elem.addEventListener('click', function () {		
				    currentSlide(k);
				})
			})
		}
}