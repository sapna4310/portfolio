

$(document).ready(function () {
  $(window).scroll(function () {
    //Sticky navbar on scroll
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //scroll up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide up script--

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    //removing smooth scroll on slide up click ---

    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //applying again smooth on menu items on click --
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script ---
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
