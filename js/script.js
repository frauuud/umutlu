const navbar = document.querySelector("nav");
const navToggler = document.getElementById("navToggler");
const navLink = document.querySelectorAll(".nav-link");

if (window.innerWidth < 991) {
  navbar.classList.add("nav-scrolled");
  navbar.classList.remove("nav-scrolled-text-shadow");
  navToggler.classList.replace("navbar-dark", "navbar-light");
  navLink.forEach((e) => e.classList.remove("bawah"));
}

document.addEventListener("scroll", function () {
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add("nav-scrolled");
    navbar.classList.remove("nav-scrolled-text-shadow");
    navToggler.classList.replace("navbar-dark", "navbar-light");
    navLink.forEach((e) => e.classList.remove("bawah"));
  } else {
    if (window.innerWidth > 992) {
      navbar.classList.add("nav-scrolled-text-shadow");
      navbar.classList.remove("nav-scrolled");
      navToggler.classList.replace("navbar-light", "navbar-dark");
      navLink.forEach((e) => e.classList.add("bawah"));
    }
  }
});

// Footer
const footer = document.getElementById("footer");
footer.innerHTML = showFooter();

function showFooter() {
  return `<div class="container-fluid footer">
            <div class="row justify-content-center">
              <div class="col-12 text-center footer-content">
                <div class="footer-title text-white">
                  <h1 class="fw-bold" style="color: #06983A;">Umutlu Yaşam Kolektifi</h1>
                  <span class="me-3"> <a href="https://www.instagram.com/umutluyasamkolektifi/"><i class="fa-brands fa-instagram" style="color: white; font-size:36px;"></a></i></span>
                  <span><a href="mailto:umutluyasam@outlook.com"><i class="fa fa-envelope" style="font-size:36px; color: white;"></i></a>
                  </span>
                </div>
              </div>
            </div>
            <div class="text-footer text-white text-center">
              <p class="m-0">
              <i class="fa-solid fa-heart text-danger">&nbsp;</i><a href="https://github.com/berkayerdeniz0" target="_blank" style="color:#06983A;">UYAK DIGITAL</a> ekibi tarafından desteklenmektedir. </br>
               © 2023 Copyright | Tüm hakları saklıdır.
              </p>
            </div>
          </div>`;
          
}

// Scroll Up
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go-top-btn").fadeIn();
    } else {
      $(".go-top-btn").fadeOut();
    }
  });
  $(".go-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
