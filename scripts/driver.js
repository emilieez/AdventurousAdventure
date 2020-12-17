sceneBG.style.backgroundImage = "url('images/sky_1.jpg')"
sceneBG.appendChild(sky1)
setTimeout(function () {
    sky1continue.style.display = "block";
}, 4000);

// ================ EVENT LISTENERS =================
document.getElementById("sky1continue").addEventListener("click", function () {
    transitionScene("url('images/forest_1.jpg')", sky1, forest1)
})