$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
	$('.member').on('click mouseover', function () {
		var tab_id = $(this).attr('data-tab');

		$('.member').removeClass('current');
		$('.tabs p').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});