const startPauseBtn=document.querySelector(".btn #startPause");
const restartBtn=document.querySelector(".btn #restart");
const timer = document.querySelector('.timer #timerTime');

let startTime=0;
let spendTime=0;
let savedTime=0;
let interval;
startPauseBtn.addEventListener('click',(event)=>{
    if(! startPauseBtn.classList.contains('check')){
        startTime= new Date();
        startPauseBtn.classList.toggle('check');
        event.target.innerHTML='Pause';
        interval=setInterval(()=>{
            date= new Date();
            diff=date-startTime+savedTime;
            ms=String(parseInt((diff%1000)/10)).padStart(2,'0');
            sec=String(parseInt(diff/1000)%60).padStart(2,'0');
            min=String(parseInt(sec/60)).padStart(2,'0');
            timer.innerHTML=`${min}:${sec}:${ms}`
        },1)
    }
    else{
        startPauseBtn.classList.toggle('check');
        event.target.innerHTML='Start';
        savedTime=diff;
        clearInterval(interval);
    }
    
});

restartBtn.addEventListener('click',()=>{
    clearInterval(interval);
    timer.innerHTML='00:00:00';
    savedTime=0;
    if(startPauseBtn.classList.contains('check')){
        startPauseBtn.classList.toggle('check');
        startPauseBtn.innerHTML='Start';
    }
})