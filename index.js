// alert("hii");

var btnlen = document.querySelectorAll(".drum").length;
for (var i = 0; i < btnlen; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("clicked");
        //this.style.color="white";
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makesound(buttonInnerHTML);
        addanimation(buttonInnerHTML);
    });

    document.addEventListener("keydown", function (event) {
        makesound(event.key);
        addanimation(event.key);
    });
}
function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function addanimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}



