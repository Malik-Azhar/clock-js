function showTime(){
    const currentTime = new Date();

    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var session = "PM";

    if(h == 0){
        h = 12;
    }
    if(h >12){
        h = h-12;
        session = "AM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s + session;
    document.querySelector(".wrapper .container").textContent = time;

    setInterval(showTime, 1000);
    
}

showTime();