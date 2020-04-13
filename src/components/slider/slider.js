class Slider {

	constructor(element) {

		this.slider = element;

		this.slides = this.slider.querySelectorAll('.js-slider__item');

		this.dots = this.slider.querySelectorAll('.js-slider-dots__item');

		this.sliderPrev = this.slider.querySelector('.js-slider__prev');
		this.sliderNext = this.slider.querySelector('.js-slider__next');
		
		this.addSlider();

	}

	addSlider() {

		let slideIndex = 1;

		setCurrentSlide(slideIndex, this.slides);
		setCurrentDot(slideIndex, this.dots);

		setDotsClicks(this.dots, this.slides);

		if (this.sliderPrev || this.sliderNext)
			setPrevNextClicks(this.sliderPrev, this.sliderNext, this.slides, this.dots);


		function setCurrentSlide(slideIndex, slides) {

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}

			slides[slideIndex - 1].style.display = 'block';
		}

		function setCurrentDot(slideIndex, dots) {

			for (let i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' slider-dots__item_active', '');
			}

			dots[slideIndex - 1].className += ' slider-dots__item_active';
		}

		function setPrevNextClicks(prev, next, slides, dots) {
				if (prev)
					prev.addEventListener('click', function () {	
						slideIndex = slideIndex-1 < 1 ? slides.length : slideIndex-1;
						setCurrentSlide(slideIndex, slides);
						if (dots) setCurrentDot(slideIndex, dots);
					});

				if (next)
					next.addEventListener('click', function () {		
						slideIndex = (slideIndex+1 > slides.length) ? 1 : slideIndex+1;
						setCurrentSlide(slideIndex, slides);
						if (dots) setCurrentDot(slideIndex, dots);
					});
		}

		function setDotsClicks(dots, slides) {
			let k = 0;

			dots.forEach( (elem, k) => {
				k++;
				elem.addEventListener('click', function () {
					slideIndex = k;
					setCurrentSlide(slideIndex, slides);
					setCurrentDot(slideIndex, dots);
				})
			})				
			
		}

	}

}


export default Slider;