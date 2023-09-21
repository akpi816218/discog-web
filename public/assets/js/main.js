/** @type {import('aos').Aos} */
globalThis.AOS = AOS;
AOS.init({
	duration: 700,
	once: false
});

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

$('.navbar-burger').on('click', () => {
	$('.navbar-burger').toggleClass('is-active');
	$('.navbar-menu').toggleClass('is-active');
});

// back to top
globalThis.backToTop = $('#backtotop');
backToTop.on('click', () => {
	$('html, body').animate({ scrollTop: 0 }, 1_000);
});

globalThis.buttonScrollToInvite = $('#button-scroll-to-invite');
if (buttonScrollToInvite) {
	buttonScrollToInvite.on('click', () => {
		$('html, body').animate({ scrollTop: $('#invite').offset()?.top }, 400);
	});
}

$(window).on('scroll', () => {
	if ($(window).scrollTop() > 100) {
		backToTop.addClass('show');
	} else {
		backToTop.removeClass('show');
	}
});

// scroll down chevron
$('#scroll-down-chevron').on('click', () => {
	$(window).scrollTop(
		$('#features').offset()?.top ??
			$('#invite').offset()?.top ??
			$('#akpi816218').offset()?.top
	);
});

// copyright year
document.getElementById('cp-year').innerHTML = new Date().getFullYear();
