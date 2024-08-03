setInterval(time,1)
function time(){
    var now = new Date();
    var hour = now.getHours()%12;
    var min = now.getMinutes()
    var sec = now.getSeconds()
    document.querySelector("#sec").style.transform = `rotate(${sec*6}deg)`;
    document.querySelector("#min").style.transform = `rotate(${min*6}deg)`;
    document.querySelector("#hour").style.transform = `rotate(${hour*30}deg)`;
}

