window.addEventListener("load", () => {
    let options = Array.from(document.getElementsByClassName("option"));
    options.forEach((o) => {
        o.addEventListener("click", (e) => {
            options.forEach((el) => {
                el.classList.toggle("option-highlighted");
            });
        }, false);
    });
}, true);
