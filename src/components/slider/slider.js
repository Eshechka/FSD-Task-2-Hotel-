// Все слайдеры c классом sliders перебираем в цикле
let allSliders = document.querySelectorAll('.sliders');

for (let slider of allSliders) {
let slideIndex = 1;

	// Получаем каждый слайдер по его уникальному классу
	let sliderName = document.querySelector('.'+slider.classList[1]);
	let slides = sliderName.querySelectorAll('.sliders__item');
    let dots = sliderName.querySelectorAll('.sliders-dots__item');

	setCurrentSlide();

	function setCurrentSlide () {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		slides[slideIndex - 1].style.display = 'block';
		// Если слайдер будет работать через dots		
		if (dots.length) {
			for (let i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' sliders-dots__item_active', '');
			}
			dots[slideIndex - 1].className += ' sliders-dots__item_active';
		}
	}
    
	let sliderPrev = sliderName.querySelector('.sliders__prev')
		if (sliderPrev) 
			sliderPrev.addEventListener('click', function () {	
				slideIndex = slideIndex-1 < 1 ? slides.length : slideIndex-1;
				setCurrentSlide();
			});

	let sliderNext = sliderName.querySelector('.sliders__next')
		if (sliderNext) 
			sliderNext.addEventListener('click', function () {		
				slideIndex = (slideIndex+1 > slides.length) ? 1 : slideIndex+1;
				setCurrentSlide();
			});

// Если слайдер будет работать через dots
	// if (dots.length) {
		let k = 0;
		dots.forEach( (elem, k) => {
			k++;
			elem.addEventListener('click', function () {
				slideIndex = k;
				setCurrentSlide();
			})
		})
	// }
}