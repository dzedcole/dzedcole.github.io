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
    main.className = "main dark-mode";
    navbar.className = "navbar nav-dark-mode";

    document.querySelector("html").style.background = "url(../img/bg-night.png)";
    document.querySelector("html").style.backgroundRepeat = "no-repeat";
    document.querySelector("html").style.backgroundSize = "cover";
    document.querySelector("html").style.height = "100%";

    currentTheme = "dark-mode";
    localStorage.clear()
    localStorage.setItem("current-theme", currentTheme);

    select()
    }
    else {
        main.className = "main";
        navbar.className = "navbar";

        document.querySelector("html").style.background = "url(../img/bg-day.png)";
        document.querySelector("html").style.backgroundRepeat = "no-repeat";
        document.querySelector("html").style.backgroundSize = "cover";
        document.querySelector("html").style.height = "100%";

        currentTheme = "main";
        localStorage.clear()
        localStorage.setItem("current-theme", currentTheme);
        
        select()
    }

    
}
    let d = new Date;
    let n = d.getHours()

    if (n > 7) {
        if (n < 19 ) {
            document.querySelector("html").style.background = "url(../img/bg-day.png)";
            document.querySelector("html").style.backgroundRepeat = "no-repeat";
            document.querySelector("html").style.backgroundSize = "cover";
            document.querySelector("html").style.height = "100%";

            currentTheme = "main";
            localStorage.setItem("current-theme", currentTheme);
            console.log (currentTheme)
    }
}
    else {            
            document.querySelector("html").style.background = "url(../img/bg-day.png)";
            document.querySelector("html").style.backgroundRepeat = "no-repeat";
            document.querySelector("html").style.backgroundSize = "cover";
            document.querySelector("html").style.height = "100%";

            currentTheme = "main";
            localStorage.setItem("current-theme", currentTheme);

            console.log(currentTheme)
    }
    function changeToDarkMode() {
        document.querySelector(".main").className = "main dark-mode";
            document.querySelector(".nav").className = "navbar nav-dark-mode";
    }

localStorage.clear()
console.log("File Loaded!")