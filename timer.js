function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Minutes:" + date.getSeconds()+ "Secs:";
}

function showSessionExpire(){
    console.log("Activity-B :=> Your Session is expired at " +showTime());
}

console.log("Activity-A :=> Trigerring Activity-B at " +showTime());
setTimeout(showSessionExpire , 5000);
console.log("Activity-A :=> Triggered Activity-B at " +showTime()+ "Will execute after 5 seconds");