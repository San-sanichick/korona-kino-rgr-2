window.addEventListener("load", () => {
    let menu = document.getElementById("menu");
    let page = document.getElementById("page");
    let body = document.body;
    let overlay = document.getElementsByClassName("overlay")[0];
    console.log(page);
    let burger = document.getElementsByClassName("menu-burger")[0];

    burger.addEventListener("click", () => {
        menuToggle();
    }, false);

    overlay.addEventListener("click", () => {
        menuToggle();
    }, false);

    function menuToggle() {
        menu.classList.toggle("menu-open");
        page.classList.toggle("page-open");

        if (burger.classList.contains("is-active")) {
            burger.classList.remove("is-active");
        } else {
            burger.classList.add("is-active");
        }

        if (overlay.classList.contains("overlay-active")) {
            overlay.classList.remove("overlay-active");
            body.style.overflow = "visible";
        } else {
            overlay.classList.add("overlay-active");
            body.style.overflow = "hidden";
        }
    }
}, true);
