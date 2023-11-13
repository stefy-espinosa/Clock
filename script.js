setInterval(() => {
    var clock = document.getElementsByClassName("clock")[0];
    var currentTime = new Date();
    var hour= currentTime.getHours()
    if (hour<10){
        hour=`0${hour}`
    }
    var minutes= currentTime.getMinutes()
    if (minutes<10){
        minutes=`0${minutes}`
    }
    var seconds= currentTime.getSeconds()
    if (seconds<10){
        seconds=`0${seconds}`
    }

    clock.innerHTML=`${hour}:${minutes}:${seconds}`;
}, 1000);