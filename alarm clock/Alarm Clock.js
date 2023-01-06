const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime,
itAlarmOn = false,
ringtone = new Audio("file:///D:/download/WhatsApp%20Audio%202022-12-31%20at%2011.39.02%20AM%20(online-audio-converter.com).mp3");

for (let i = 12; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() =>{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = "PM";
    
    if(hour >= 12){
        hour = hour - 12;
        ampm.innerHTML = "PM";
        
    }
    hour = hour == 0 ? hour = 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    

    currentTime.innerText = `${hour}:${minute}:${second} ${ampm}`;



    // document.getElementById('hour').innerHTML = (hour);
    // document.getElementById('minute').innerHTML = (minute);
    // document.getElementById('second').innerHTML = (second);

    if (alarmTime == `${hour}:${minute} ${ampm}`){
        ringtone.play();
        ringtone.loop = true;
    }


}, 1000);

function setAlarm(){
    if(itAlarmOn){
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        // ringtone.loop = false;
         itAlarmOn = false;
        
    }    
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    // const content = document.querySelectorAll("content");

    
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        alert("please add an Alarm");
    }
    itAlarmOn = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    

    // console.log(time)

}
 
setAlarmBtn.addEventListener("click", setAlarm);