"use strict";

function dropdown() {
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
dropdownChild()

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

function wait(element, timer) {
  const targets = document.querySelectorAll(element);
  targets.forEach((target) => {
    target.classList.add("slideAnimation");
    setTimeout(() => {
      target.classList.add("slideAnimation-active");
    }, timer * 1000);
  });
}
wait(".preview__content", 12);
