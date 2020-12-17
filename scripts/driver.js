sceneBG.style.backgroundImage = "url('images/sky_1.jpg')"
sceneBG.appendChild(sky1)
setTimeout(function () {
    sky1continue.style.display = "block";
}, 4000);

// ================ EVENT LISTENERS =================
document.getElementById("sky1continue").addEventListener("click", function () {
    transitionScene("url('images/forest_1.jpg')", sky1, forest1);

    setTimeout(function () {
        forest1continue.style.display = "block";

        document.getElementById("forest1continue").addEventListener("click", function () {
            transitionScene("url('images/forest_2.jpg')", forest1, forest2)

            setTimeout(function () {
                forest2mushrooms.style.display = "block";
                forest2tree.style.display = "block";

                // document.getElementById("forest2mushrooms").addEventListener("click", function () {
                //     transitionScene("url('images/forest_2.jpg')", forest1, forest2)
                // })
            }, 4000);
        })
    }, 4000);

})