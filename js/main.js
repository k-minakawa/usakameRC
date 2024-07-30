// ハンバーガー
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

///クリックしたら消えるようにする///
const navLinks = document.querySelectorAll(".nav-items__item");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        ham.classList.remove("active");
        nav.classList.remove("active");
    });
});