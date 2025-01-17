$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });
});

AOS.init();

$(document).ready(function () {
  // Smooth scrolling using jQuery easing
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;
      const offset = 70; // Adjust the offset as needed

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - offset,
        },
        100,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          history.replaceState(null, null, hash);
        }
      );
    }
  });

  // Navbar Links Active On Scroll
  $("body").scrollspy({ target: "#navbarNav", offset: 70 });

  // Navbar Links Active On Click
  $(".navbar-nav").on("click", "a.nav-link", function () {
    $(".navbar-nav").find("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
