"use strict";

const navbarDropdowns = document.querySelectorAll(".navbar__dropdown");
navbarDropdowns.forEach((navbarDropdown) => {
  const button = navbarDropdown.querySelector(".navbar__list--text");
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

// const navbarDropdownChild = document.querySelector('navbar__dropdown--child')
// const buttons = navbarDropdownChild.querySelectorAll(".navbar__dropdown--child-item")
// const lists = navbarDropdownChild.querySelectorAll(".navbar__dropdown--child-list")
// buttons.forEach(button => {
//     button.addEventListener('click', function() {})
// })

const productImg = document.querySelector(".hero__product--img");
const productSrcArray = [
  "src/img/product-1.png",
  "src/img/product-2.png",
  "src/img/product-3.png",
  "src/img/product-4.png",
  "src/img/product-5.png",
  "src/img/product-6.png",
  "src/img/product-7.png",
  "src/img/product-8.png",
  "src/img/product-9.png",
  "src/img/product-10.png",
  "src/img/product-11.png",
];
let index = 0;
setInterval(() => {
  productImg.classList.remove("hero__product--animation");
  setTimeout(() => {
    productImg.src = productSrcArray[index];
    productImg.classList.add("hero__product--animation");
    index = (index + 1) % productSrcArray.length;
  }, 500);
}, 3000);

const cardScroll = document.querySelector(".preview__card--scroll");
const scroll = document.querySelector(".preview__card--styles-content");
cardScroll.addEventListener("mouseenter", function () {
  scroll.classList.add("preview__card--styles-content-active");
});
cardScroll.addEventListener("mouseleave", function () {
  scroll.classList.remove("preview__card--styles-content-active");
});

const cardPopup = document.querySelectorAll(".preview__card--popup");
cardPopup.forEach((card) => {
  const popup = card.querySelector(".preview__card--styles-bottom");
  card.addEventListener("mouseenter", function () {
    popup.classList.add("preview__card--styles-bottom-active");
  });
  card.addEventListener("mouseleave", function () {
    popup.classList.remove("preview__card--styles-bottom-active");
  });
});
