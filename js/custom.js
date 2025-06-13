// services
$(() => {
  new WOW().init();
});
// work
$(function () {
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});
//team
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause:true
  });
});
