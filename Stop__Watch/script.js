let timerDisplay = document.querySelector('.timeDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('Reset');

let msec= 0;
let secs= 0;
let mins= 0;
let hors= 0;

let timerId = null;

startBtn.addEventListener('click',()=>{
    if( timerId !== null){
        clearInterval(timerId);
    }
   timerId=setInterval(startTimer,10);
});

stopBtn.addEventListener('click',()=>{
     clearInterval(timerId);
});

resetBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    msec = secs = mins = hors = 0;
});

function startTimer(){
    msec++;
    if(msec== 100){
        msec=0;
        secs++;
        if(secs== 60){
            secs = 0;
            mins++;
            if(mins== 60){
                mins=0;
                hors++;
            }

        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let horsString = mins < 10 ? `0${hors}` : hors;


    timerDisplay.innerHTML = `${msecString} : ${secsString} : ${minsString} : ${horsString}`;

}