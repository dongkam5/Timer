const startPauseBtn=document.querySelector(".btn #startPause");
const restartBtn=document.querySelector(".btn #restart");
const timer = document.querySelector('.timer #timerTime');
const box= document.querySelector('.playground');

let startTime=0;
let spendTime=0;
let savedTime=0;
let timeInterval;
let appearInterval;
let element= new Array();
let interTime=1000;
startPauseBtn.addEventListener('click',(event)=>{
    if(! startPauseBtn.classList.contains('check')){
        startTime= new Date();
        startPauseBtn.classList.toggle('check');
        event.target.innerHTML='Pause';
        timeInterval=setInterval(()=>{
            date= new Date();
            diff=date-startTime+savedTime;
            ms=String(parseInt((diff%1000)/10)).padStart(2,'0');
            sec=String(parseInt(diff/1000)%60).padStart(2,'0');
            min=String(parseInt(sec/60)).padStart(2,'0');
            timer.innerHTML=`${min}:${sec}:${ms}`
        },1)
        appearInterval = setInterval(()=>{
            interTime=parseInt((Math.random()*5000));
            alert('hi');
        },interTime);
    }
    else{
        startPauseBtn.classList.toggle('check');
        event.target.innerHTML='Start';
        savedTime=diff;
        clearInterval(timeInterval);
        clearInterval(appearInterval);
    }
    
});
restartBtn.addEventListener('click',()=>{
    clearInterval(appearInterval);
    clearInterval(timeInterval);
    timer.innerHTML='00:00:00';
    savedTime=0;
    if(startPauseBtn.classList.contains('check')){
        startPauseBtn.classList.toggle('check');
        startPauseBtn.innerHTML='Start';
    }
})

