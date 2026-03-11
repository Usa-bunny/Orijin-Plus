"use strict";

function dropdown(element) {
  const navbarDropdowns = document.querySelectorAll(element);
  navbarDropdowns.forEach((navbarDropdown) => {
    const item = navbarDropdown.querySelector(`${element}--item`);
    const list = navbarDropdown.querySelector(`${element}--list`);
    item.addEventListener("click", function () {
      list.classList.toggle("hidden");
    });
    document.addEventListener("click", function (e) {
      if (!navbarDropdown.contains(e.target)) {
        list.classList.add("hidden");
      }
    });
  });
}
dropdown(".navbar__dropdown");
dropdown(".navbarMobile__dropdown");

function dropdownChild(element) {
  const navbarDropdownChild = document.querySelector(element);
  const buttons = navbarDropdownChild.querySelectorAll(`${element}-item`);
  const lists = navbarDropdownChild.querySelectorAll(`${element}-list`);
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) =>
        button.classList.remove("navbar__dropdown--child-item-active"),
      );
      lists.forEach((list) => list.classList.add("hidden"));

      button.classList.add("navbar__dropdown--child-item-active");
      lists[index].classList.remove("hidden");
    });
  });
}
dropdownChild(".navbar__dropdown--child");
dropdownChild(".navbarMobile__dropdown--child");

function setImage(productSrcArray, interval) {
  const productImg = document.querySelector(".hero__product--img");
  let index = 0;
  setInterval(() => {
    productImg.classList.remove("hero__product--animation");
    setTimeout(() => {
      productImg.src = productSrcArray[index];
      productImg.classList.add("hero__product--animation");
      index = (index + 1) % productSrcArray.length;
    }, 500);
  }, interval * 1000);
}
// prettier-ignore
setImage(["src/img/product-1.png","src/img/product-2.png","src/img/product-3.png","src/img/product-4.png","src/img/product-5.png","src/img/product-6.png","src/img/product-7.png","src/img/product-8.png","src/img/product-9.png","src/img/product-10.png","src/img/product-11.png",], 3)

function cardScroll() {
  const cardScroll = document.querySelectorAll(".preview__card--scroll");
  cardScroll.forEach((card) => {
    const scroll = card.querySelector(".preview__card--styles-content");
    ["mouseenter", "mouseleave"].forEach((event) => {
      card.addEventListener(event, function () {
        scroll.classList.toggle("preview__card--styles-content-active");
      });
    });
  });
}
cardScroll();

function cardPopup() {
  const cardPopup = document.querySelectorAll(".preview__card--popup");
  cardPopup.forEach((card) => {
    const popup = card.querySelector(".preview__card--styles-bottom");
    ["mouseenter", "mouseleave"].forEach((event) => {
      card.addEventListener(event, function () {
        popup.classList.toggle("preview__card--styles-bottom-active");
      });
    });
  });
}
cardPopup();

function waitNSlide(timer) {
  const targets = document.querySelectorAll(".preview__content");
  targets.forEach((target) => {
    target.classList.add("slideAnimation");
    setTimeout(() => {
      target.classList.add("slideAnimation-active");
    }, timer * 1000);
  });
}
waitNSlide(1);

function slider() {
  const cards = document.querySelectorAll(".testimonial__card");
  const btnPrevious = document.querySelector(
    ".testimonial__swiper--wrapper-prev",
  );
  const btnNext = document.querySelector(".testimonial__swiper--wrapper-next");
  const dotContainer = document.querySelector(
    ".testimonial__swiper--pagination",
  );
  let currentSlide = 0;
  const maxSlide = cards.length;

  function createDots() {
    cards.forEach((_, i) =>
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slides="${i}"></button>`,
      ),
    );
  }

  function activateDots(currentSlide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slides="${currentSlide}"]`)
      .classList.add("dots__dot--active");
  }

  function goToSlide(slideIndex) {
    cards.forEach((card, i) => {
      const offset = (i - slideIndex * 2) * 100;
      card.style.transform = `translateX(${offset}%)`;
      if (offset < -100 * maxSlide)
        card.style.transform = `translateX(${(maxSlide - 1) * 100}%)`;
      if (offset > 100 * maxSlide)
        card.style.transform = `translateX(-${(maxSlide - 1) * 100}%)`;
      if (offset < -100 && i !== slideIndex) card.style.opacity = "0";
      else card.style.opacity = "1";
    });
  }

  function nextSlide() {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  }

  function previousSlide() {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  }

  function runInfinite(second, reversed = false) {
    setInterval(() => {
      if (!reversed) {
        goToSlide(0);
        nextSlide();
      } else if (reversed) {
        goToSlide(maxSlide - 1);
        previousSlide();
      }
    }, second * 1000);
  }

  function goToDot() {
    dotContainer.addEventListener("click", function (e) {
      const slide = +e.target.closest(".dots__dot").dataset.slides;
      if (!slide) return;
      currentSlide = slide;
      goToSlide(currentSlide);
      activateDots(currentSlide);
    });
  }

  function init() {
    createDots();
    activateDots(0);
    goToDot();
    runInfinite(5);
  }
  init();

  btnPrevious.addEventListener("click", previousSlide);
  btnNext.addEventListener("click", nextSlide);
}
slider();

function showMobileEvent(query) {
  const iconsHide = document.querySelectorAll(".icon-hide");
  const btnIcon = document.querySelector(".icon__collapse");
  const navbarMobile = document.querySelector(".navbarMobile");
  const navbarMobileList = document.querySelector(".navbarMobile__list");
  const btnToogle = document.querySelector(".navbarMobile__toogle");
  const icon = document.querySelector(".navbarMobile__icon");
  const navbar = document.querySelector(".navbar");

  function eventHideShow() {
    iconsHide.forEach((icon) => icon.classList.toggle("icon__hidden"));
    if (document.querySelectorAll(".icon__hidden").length)
      btnIcon.textContent = "See more...";
    else btnIcon.textContent = "See less...";
  }

  btnToogle.addEventListener("click", function () {
    icon.classList.toggle("navbarMobile__icon--active");
    navbarMobileList.classList.toggle("navbarMobile__list--active");
  });

  window
    .matchMedia(`(max-width: ${query}px)`)
    .addEventListener("change", function (e) {
      if (e.matches) {
        btnIcon.textContent = "See more...";
        iconsHide.forEach((icon) => icon.classList.add("icon__hidden"));
        btnIcon.addEventListener("click", eventHideShow);
        navbar.style.display = "none";
        navbarMobile.style.display = "block";
      } else if (!e.matches) {
        btnIcon.textContent = "And much more...";
        iconsHide.forEach((icon) => icon.classList.remove("icon__hidden"));
        btnIcon.removeEventListener("click", eventHideShow);
        navbar.style.display = "flex";
        navbarMobile.style.display = "none";
      }
    });
}
showMobileEvent(1000);

function expandQNA() {
  const qnaContainer = document.querySelector(".qna__content--list");
  qnaContainer.addEventListener("click", function (e) {
    const qnaCard = e.target.closest(".qna__content--item");
    const qnaIcon = qnaCard.querySelector(".qna__content--item-icon");
    if (!qnaCard) return;
    qnaCard.classList.toggle("qna__expanded");
    if (qnaCard.classList.contains("qna__expanded")) {
      qnaIcon.style.transform = "rotate(180deg)";
      qnaIcon.src = "src/img/min.png";
    } else {
      qnaIcon.style.transform = "rotate(0)";
      qnaIcon.src = "src/img/plus.png";
    }
  });
}
expandQNA();
