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

  $("form#form").submit(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $.ajax({
      method: "POST",
      url: "form.php",
      data: { email: $("#subscribe-email").val() }
    }).done(function( msg ) {
      $("#his-mail").html($("#subscribe-email").val());
      $("#subscribe-email").val('');
      $("#new-subscribed").removeClass("hidden");
      $("#new-subscribe").addClass("hidden");
    });
  })
});

function reset() {
  $("#new-subscribed").addClass("hidden");
  $("#new-subscribe").removeClass("hidden");
}

