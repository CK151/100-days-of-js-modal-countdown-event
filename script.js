const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];


btn.addEventListener("click", openPopUp);
close.addEventListener("click", closePopUp)

//open popUp

function openPopUp(e) {
    e.preventDefault();
    //console.log(input.value);

    modal.style.display = "block";
    startCountDown();
}

function closePopUp() {
    //console.log(input.value);
    modal.style.display = "none"
    
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

//counter function

let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");


function startCountDown() {
    let downloadTimer = setInterval(() => {
        progressBar.value = 10 - (--reverseCounter);

        if (reverseCounter <= 0) {
            clearInterval(downloadTimer);
            closePopUp();
            window.open(input.value, "_blank");
        }

        counting.innerHTML = reverseCounter;
    }, 1000)

    let reverseCounter = 11;
    
}