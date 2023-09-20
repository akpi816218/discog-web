$(window).scrollTop(0);

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll('.navbar-burger'),
		0
	);

	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach((el) => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

$(document).on('ready', () => {
	$('.navbar-burger').on('click', () => {
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});
});

// navbar on scroll
$(() => {
	$(window).on('scroll', () => {
		if ($(window).scrollTop() > 700) {
			$('nav').addClass('nav-w');
			$('.navbar-menu').addClass('nav-w');
			$('.navbar-item').addClass('nav-dark');
			$('.navbar-link').addClass('nav-dark');
			$('.navbar-burger').removeClass('has-text-white');
			$('.navbar-burger').addClass('has-text-dark');
		} else {
			$('nav').removeClass('nav-w');
			$('.navbar-menu').removeClass('nav-w');
			$('.navbar-item').removeClass('nav-dark');
			$('.navbar-link').removeClass('nav-dark');
			$('.navbar-burger').removeClass('has-text-dark');
			$('.navbar-burger').addClass('has-text-white');
		}
	});
});

// scroll down chevron
$('#scroll-down-chevron').on('click', () => {
	$(window).scrollTop($('#features').offset().top);
});

// back to top
const backToTop = $('#backtotop');

$(window).on('scroll', () => {
	if ($(window).scrollTop() > 100) {
		backToTop.addClass('show');
	} else {
		backToTop.removeClass('show');
	}
});

btn.on('click', (e) => {
	e.preventDefault();
	$(document).animate({ scrollTop: 0 }, '300');
});

// copyright year
document.getElementById('cp-year').innerHTML = new Date().getFullYear();
