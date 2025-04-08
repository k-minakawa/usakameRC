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

// ナビのスクロールイン
gsap.from(".l_header__inner", {
  y: -200,
  autoAlpha: 1,
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

//ポップアップ
//要素を取得
const modal = document.querySelector('.js-modal'),
      open = document.querySelector('.js-modal-open'),
      close = document.querySelector('.js-modal-close');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add('is-active');
}
open.addEventListener('click', modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove('is-active');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove('is-active');
  }
}
addEventListener('click', modalOut);