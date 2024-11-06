// Get elements from the html dom

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


let controlButton = document.getElementById("strp");
let controlButtonState = false;

// function to chose value using scroll wheel

function scroller(param, timeParam){

    // Decreases the value of the field if the user scrolls down and the field is not 0

    if(param.deltaY < 0 && eval(timeParam.innerHTML) != 0){
        timeParam.innerHTML = `${eval(timeParam.innerHTML)-1}`.padStart(2, '0');
    }

    // Increases the value of the field if user scrolls up

    else if(param.deltaY > 0 && eval(timeParam.innerHTML) <= 59){
        timeParam.innerHTML = `${eval(timeParam.innerHTML)+1}`.padStart(2, '0');
    }
}

function timerFunction(){
    controlButton.src = (controlButtonState == false) ? './assest/pause.png' : './assest/play.png';
    controlButtonState = !controlButtonState;
}

// Adding the event to the various time fieds passing the event object and time field as parmeters

hours.addEventListener('wheel', (e)=>{scroller(e, hours)});
minutes.addEventListener('wheel', (e)=>{scroller(e, minutes)});
seconds.addEventListener('wheel', (e)=>{scroller(e, seconds)});
controlButton.addEventListener('click', timerFunction);