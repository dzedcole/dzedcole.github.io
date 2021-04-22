function themeSwitcher() {
    const bgElements = document.querySelectorAll("main, html");
    const pElements = document.querySelectorAll("p, h3, div");

    for (let i = 0; i < bgElements.length; i++) {
        let elem = bgElements[i];
        elem.classList.toggle("darkTheme");
    }
    for (let i = 0; i < pElements.length; i++) {
        let elem = pElements[i];
        elem.classList.toggle("darkTheme-p");
    }
}
console.log("ahoi")