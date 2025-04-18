// ハンバーガー
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

///クリックしたら消えるようにする///
const navLinks = document.querySelectorAll(".l_header__nav-item");
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        ham.classList.remove('active');
        nav.classList.remove('active');
    });
});


// ナビのスクロールイン
gsap.from(".l_header__inner", {
  y: -200,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".l_header",
    start: "bottm top",
    toggleActions: 'play none none reverse',
    // markers: true,
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});
