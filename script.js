window.addEventListener('load',nowdateTime)
function nowdateTime(){
    var date = new Date();    
    var daynumber = date.getDate();
    var daynumber = daynumber < 10 ? '0'+ daynumber : daynumber;
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = month[date.getUTCMonth()];
    var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var daysName = daysName[date.getDay()];
    var hour = date.getHours();
    var hour = hour < 10 ? '0'+ hour : hour;
    var minute = date.getMinutes();
    var minute = minute < 10 ? '0'+ minute : minute;
    var secend = date.getSeconds();
    var secend = secend < 10 ? '0'+ secend : secend;
    var ampm = hour >= 12 ? 'PM' : 'AM';

document.getElementById("month").innerHTML= month;
document.getElementById("dayName").innerHTML= daysName;
document.getElementById("day").innerHTML= daynumber;
document.getElementById("hour").innerHTML= hour;
document.getElementById("minute").innerHTML= minute;
document.getElementById("secend").innerHTML= secend;
document.getElementById("ampm").innerHTML= ampm;
setTimeout(nowdateTime,200);
}
