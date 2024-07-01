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

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var toastEl = document.getElementById("myToast");
    var toast = new bootstrap.Toast(toastEl, {
      autohide: false,
    });

    toastEl.classList.remove("hide"); // Ensure it's not hidden
    toast.show();
  }, 5000); // 5000ms = 5 seconds
});
