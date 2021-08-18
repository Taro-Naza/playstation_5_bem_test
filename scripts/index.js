document.addEventListener('DOMContentLoaded', () => {
	let app = start();
	app.events();
	app.animate();
});

function start() {
	function handleMouseOver() {
		anime({
			targets: this,
			scale: [1, 1.2],
		});
	}

	function handleMouseOut() {
		anime({
			targets: this,
			scale: [1.2, 1],
		});
	}

	function DOMCapture() {
		let sliderItems = document.querySelectorAll('.slider__item');
		return { sliderItems };
	}

	function events() {
		let { sliderItems } = DOMCapture();

		setTimeout(() => {
			sliderItems.forEach((item) => {
				item.addEventListener('mouseover', handleMouseOver);
			});

			sliderItems.forEach((item) => {
				item.addEventListener('mouseout', handleMouseOut);
			});
		}, 2000);
	}

	function animate() {
		anime({
			targets: '.product-info',
			translateX: [-300, 0],
			duration: 2500,
		});

		anime({
			targets: '.slider__item',
			translateX: [-3000, 0],
			delay: anime.stagger(100),
			duration: 2000,
			easing: 'easeOutBack',
		});

		anime({
			targets: '.slide-controller--active',
			scale: [1, 1.3],
			delay: 3000,
			duration: 1500,
			direction: 'alternate',
			easing: 'easeInOutSine',
			loop: true,
		});
	}

	return {
		animate,
		events,
	};
}
