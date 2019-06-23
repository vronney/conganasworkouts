// will slide menu from the right of the screen when in mobile view

$('[data-toggle="slide-collapse"]').on('click', function () {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 350);
  $(".menu-overlay").fadeIn(500);
});

$("#dismiss, .menu-overlay, .nav-link").on("click", function (event) {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);
});


