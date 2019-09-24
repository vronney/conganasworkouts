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

// Function will scroll to the section 

$(".navbar li a").click(function (e) {
  e.preventDefault();

  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;

  $("html, body").animate({scrollTop: targetPosition - 96}, "slow");
});

// Service Worker Section

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//   navigator.serviceWorker
//     .register('/service-worker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope');
//     }, function(err) {
//       // Registration failed :(
//       console.log('ServiceWorker registration failed', err);
//     });
//   }); 
// }

