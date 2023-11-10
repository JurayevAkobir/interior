var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".-prev",
  },
  loop: true,
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});

var swiper = new Swiper(".mySwiper-two", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-2",
    prevEl: ".prev-2",
  },
  loop: true,
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});