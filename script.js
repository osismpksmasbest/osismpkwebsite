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

//Navbar Links Active On Scroll
$(document).ready(function () {
  $("body").scrollspy({
    target: "#navbar",
  });
});
//Navbar Links Active On Click
const ul = document.querySelector(".navbar-nav");
ul.addEventListener("click", (e) => {
  if (e.target.className == "nav-link") {
    ul.querySelectorAll("li a").forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  }
});
