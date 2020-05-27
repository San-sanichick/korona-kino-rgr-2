window.addEventListener("load", () => {
    let searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("keyup", () => {
        let list = document.getElementsByClassName("searchable")[0];
        let elements = Array.from(list.getElementsByTagName("li"));
        let filter = searchBar.value.toLowerCase();
        // console.log(filter);
        elements.forEach((el) => {
            let name = el.getElementsByClassName("name")[0].textContent.toLowerCase();
            if (name.includes(filter)) {
                el.style.display = "";
            } else {
                el.style.display = "none";
            }
        });

    }, false);
}, true);
