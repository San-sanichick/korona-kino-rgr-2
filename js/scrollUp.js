window.addEventListener("load", () => {
    let scrollButton = document.getElementsByClassName("scroll-up")[0];
    scrollButton.addEventListener("click", () => {
        window.scrollTo(0,0);
    }, false);
}, true);
