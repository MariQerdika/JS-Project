
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".header__nav");
    let body = document.querySelector("body");

    burger.onclick = () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("scroll-none");
    }
