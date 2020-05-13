window.addEventListener("load", () => {
    let menu = document.getElementById("menu");
    let page = document.getElementById("page");
    let body = document.body;
    console.log(page);
    let burger = document.getElementsByClassName("menu-burger")[0];

    burger.addEventListener("click", () => {
        menu.classList.toggle("menu-open");
        page.classList.toggle("page-open");
    }, false);
}, true);
