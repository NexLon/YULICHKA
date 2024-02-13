var myAudio = document.getElementById("myAudio");
var clickCount = 0;

function playPause() {
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}

function expandGif() {
    if (clickCount < 35) {
        clickCount++;
        var gif = document.querySelector(".gif");
        var scaleFactor = 1.5 + clickCount * 0.1;
        gif.style.transform = "scale(" + scaleFactor + ")";
        gif.style.transition = "transform 0.5s ease-in-out";
    } else {
        // Replace gif with image and text
        var wrapper = document.querySelector(".wrapper");
        wrapper.innerHTML = `
            <img class="image" src="cute.png" alt="cute">
            <h2 class="message">💐</h2>
        `;
    }
}
