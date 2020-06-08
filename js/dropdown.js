window.addEventListener("load", () => {
    let dropButton = document.getElementsByClassName("drop-value")[0];
    let valList = document.getElementsByClassName("value-list")[0];

    dropButton.addEventListener("click", () => {
        valList.classList.toggle("value-list-open");
    }, false);

    let values = Array.from(valList.getElementsByTagName("li"));

    dropButton.value = values[0].textContent;
    dropButton.textContent = values[0].textContent;

    values.forEach((val) => {
        val.addEventListener("click", (e) => {
            console.log(e);
            let value = e.target.textContent;
            dropButton.value = value;
            dropButton.textContent = value;
            valList.classList.toggle("value-list-open");
        }, false);
    });

}, true);
