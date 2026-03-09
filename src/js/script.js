"use strict";

function dropdown() {
  const navbarDropdowns = document.querySelectorAll(".navbar__dropdown");
  navbarDropdowns.forEach((navbarDropdown) => {
    const button = navbarDropdown.querySelector(".navbar__dropdown--item");
    const list = navbarDropdown.querySelector(".navbar__dropdown--list");
    button.addEventListener("click", function () {
      list.classList.toggle("hidden");
    });
    document.addEventListener("click", function (e) {
      if (!navbarDropdown.contains(e.target)) {
        list.classList.add("hidden");
      }
    });
  });
}
dropdown();

function dropdownChild() {
  const navbarDropdownChild = document.querySelector(
    ".navbar__dropdown--child",
  );
  const buttons = navbarDropdownChild.querySelectorAll(
    ".navbar__dropdown--child-item",
  );
  const lists = navbarDropdownChild.querySelectorAll(
    ".navbar__dropdown--child-list",
  );
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
dropdownChild();

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

function waitNSlide(element, timer) {
  const targets = document.querySelectorAll(element);
  targets.forEach((target) => {
    target.classList.add("slideAnimation");
    setTimeout(() => {
      target.classList.add("slideAnimation-active");
    }, timer * 1000);
  });
}
waitNSlide(".preview__content", 10);

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
        `<button class="dots__dot" data-cards="${i}"></button>`,
      ),
    );
  }

  function activateDots(currentSlide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-cards="${currentSlide}"]`)
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

  function init() {
    createDots();
    activateDots(0);
    runInfinite(5);
  }
  init();

  btnPrevious.addEventListener("click", previousSlide);
  btnNext.addEventListener("click", nextSlide);
}
slider();

function showHideIcons(query) {
  const iconsHide = document.querySelectorAll(".icon-hide");
  const btn = document.querySelector(".icon__collapse");

  function eventHideShow() {
    iconsHide.forEach((icon) => icon.classList.toggle("icon__hidden"));
    if (document.querySelectorAll(".icon__hidden").length)
      btn.textContent = "See more...";
    else btn.textContent = "See less...";
  }

  window
    .matchMedia(`(max-width: ${query}px)`)
    .addEventListener("change", function (e) {
      if (e.matches) {
        btn.textContent = "See more...";
        iconsHide.forEach((icon) => icon.classList.add("icon__hidden"));
        btn.addEventListener("click", eventHideShow);
      } else if (!e.matches) {
        btn.textContent = "And much more...";
        iconsHide.forEach((icon) => icon.classList.remove("icon__hidden"));
        btn.removeEventListener("click", eventHideShow);
      }
    });
}
showHideIcons(1000);

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
