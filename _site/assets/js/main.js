$(document).ready(function() {
  // Navigation
  $('.menu-toggle').click(function() {
    $('.site-nav').slideToggle(500);
  });
});


// Navigation
var icon = $(".menu-icon")
$(".menu-toggle").click(function() {
  if (icon.hasClass("active")) {
    icon.removeClass("active");
  } else {
    icon.addClass("active");
  }
});
