canvas = document.getElementById("canvas")
canvas.appendChild(sky1)
canvas.appendChild(forest1)
canvas.appendChild(forest2)

$(document).ready(function () {
    $("#startBtn").click(function () {
        $("#sky-1").fadeIn(1000);
        $("#sky1sarah").slideDown(6000);
        setTimeout(function () {
            sky1continue.style.display = "block";
        }, 3500);
    });

    $("#sky1continue").click(function () {
        $("#forest-1").fadeIn(1000);
        setTimeout(function () {
            forest1continue.style.display = "block";
        }, 2000);
    });

    $("#forest1continue").click(function () {
        $("#forest-2").fadeIn(1000);
        setTimeout(function () {
            forest2mushrooms.style.display = "block";
            forest2tree.style.display = "block";
        }, 2000);
    });
});