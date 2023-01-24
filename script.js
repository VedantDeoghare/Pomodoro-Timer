let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime=25;
let breakTime=5;

let seconds="00";


window.onload = () =>{
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
}

function start(){
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/5463");
    const audio1= new Audio("https://www.fesliyanstudios.com/play-mp3/5450");
    
    document.getElementById('start').style.display="none";
    document.getElementById('reset').style.display="block";
    
    seconds=59;
    let workMinutes = workTime-1;
    let breakMinutes = breakTime-1;

    let breakCount=0;

    let timerFunction= ()=>{

        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;
        seconds=seconds-1;
        if(seconds==0){
            workMinutes=workMinutes-1;
            if(workMinutes==-1){
                if(breakCount%2==0){
                    audio.play();
                    workMinutes=breakMinutes;
                    breakCount++;
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');

                }
                else{
                    audio1.play();
                    workMinutes=workTime-1;
                    breakCount++;
                    workTitle.classList.add('active');
                    breakTitle.classList.remove('active');
                }
            }
            seconds=59
        }
    }

    setInterval(timerFunction,1000);
}

function setWorkTime()
{
    workTime=document.getElementById('Custom Pomodoro').value;
}

function setBreakTime(){
    breakTime=document.getElementById('CustomBreak').value;
}