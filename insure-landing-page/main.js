$(".navbar-toggler").on("click", function () {
  $(".navbar-toggler img").toggleClass("active");
  $("nav.mobile").toggleClass("active");
});

$(window).on("resize", function (e) {
  if (window.innerWidth >= 768 && $("nav.mobile").hasClass("active")) {
    $(".navbar-toggler").click();
  }
});
