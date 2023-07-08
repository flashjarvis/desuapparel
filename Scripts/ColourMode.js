window.addEventListener("load", function () {
// function toggleColourMode() {
    changeColour();
});

function changeColourMode() {
    if(this.sessionStorage.getItem("dark-mode") === "true") {
        this.sessionStorage.setItem("dark-mode","false");
        changeColour();
    } else{
        this.sessionStorage.setItem("dark-mode","true");
        changeColour();
    }
}

function changeColour() {
    if(this.sessionStorage.getItem("dark-mode") === null){
        this.sessionStorage.setItem("dark-mode","true");
    }
    var r = document.querySelector(':root');
    if(this.sessionStorage.getItem("dark-mode") === "true"){
        r.style.setProperty('--primary-color', '#f5f5f5');
        r.style.setProperty('--primary-off-color', '#C2C2C2');
        r.style.setProperty('--secondary-color', '#121212');
        document.getElementById('colour-mode-button').textContent = "dark_mode";
        document.body.classList.remove('dark-mode');
    } else {
        r.style.setProperty('--primary-color', '#121212');
        r.style.setProperty('--primary-off-color', '#2e2e2e');
        r.style.setProperty('--secondary-color', '#f5f5f5');
        document.getElementById('colour-mode-button').textContent = "light_mode";
        document.body.classList.add('dark-mode');
    }
}