function returnTo() {
    window.history.go(-1);
}
/* Variables */
let currentTheme = "main";


/* index */

/* Over mij */

/* Projecten */

/* Contact */

/* Functions */
function select() {
let audio = new Audio();
audio.volume = "1.0";
audio.src = "../sounds/select.mp3";
audio.play();
}console.log(localStorage.getItem("current-theme"))
function themeSwitch() {
    let main = document.querySelector(".main");
    let navbar = document.querySelector(".navbar");

    localStorage.setItem("current-theme", currentTheme)
    console.log(currentTheme)
    

    if (localStorage.getItem("current-theme") == "main") {

        changeToDarkMode()
        console.log(localStorage)
        select()
    }
    else {

        changeToLightMode()
        console.log(localStorage)
        select()
    }

    
}
    let d = new Date;
    let n = d.getHours()

    if (n > 7) {
        if (n < 19 ) {
            changeToLightMode()
    }
}
    else {            
            changeToDarkMode()
            
    }
    function changeToDarkMode() {
            document.querySelector(".main").className = "main dark-mode";
            document.querySelector(".navbar").className = "navbar nav-dark-mode";
        
            document.querySelector("html").style.background = "url(../img/bg-night.png)";
            document.querySelector("html").style.backgroundRepeat = "no-repeat";
            document.querySelector("html").style.backgroundSize = "cover";
            document.querySelector("html").style.height = "100%";
            
            currentTheme = "main dark-mode";
            localStorage.setItem("current-theme", currentTheme);
    }
    function changeToLightMode() {
            document.querySelector(".main").className = "main";
            document.querySelector(".navbar").className = "navbar";

            document.querySelector("html").style.background = "url(../img/bg-day.png)";
            document.querySelector("html").style.backgroundRepeat = "no-repeat";
            document.querySelector("html").style.backgroundSize = "cover";
            document.querySelector("html").style.height = "100%";

            currentTheme = "main";
            localStorage.setItem("current-theme", currentTheme);
            console.log (currentTheme)
    }

console.log(localStorage)