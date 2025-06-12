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
