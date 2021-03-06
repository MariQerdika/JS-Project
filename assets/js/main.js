// burger menu
let burger = document.querySelector(".burger");
let nav = document.querySelector(".header__nav");
let body = document.querySelector("body");
burger.onclick = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("scroll-none");
}


// main video play/pause
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".content__video");
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});