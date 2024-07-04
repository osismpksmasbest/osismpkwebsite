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
      const offset = 100; // Adjust the offset as needed

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - offset,
        },
        100,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });

  // Navbar Links Active On Scroll
  $("body").scrollspy({ target: "#navbarNav", offset: 100 });

  // Navbar Links Active On Click
  $(".navbar-nav").on("click", "a.nav-link", function () {
    $(".navbar-nav").find("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const greetings = ["SELAMAT DATANG", "SUGENG RAWUH", "WELCOME"];
  const greetingElement = document.getElementById("greeting");

  let index = 0;
  setInterval(function () {
    greetingElement.textContent = greetings[index];
    index = (index + 1) % greetings.length;
  }, 3000); // Ubah setiap 3 detik (3000 milidetik)
});
