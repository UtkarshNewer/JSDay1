function time(){
    let date=new Date();
    let day=date.getDay();
    let hr=date.getHours();
    let mm=date.getMinutes();
    let sec=date.getSeconds();
    let dayName;
    let monthName;
    let mon=date.getMonth();
    let year=date.getFullYear();
    let c_Date=date.getDate();
    let timeZone="AM";
    let timeMessage;
    switch(day){
        case 0:
            dayName="Sunday";
            break;
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Friday";
            break;
        case 6:
            dayName="Saturday";
            break;                  
    }
    switch(mon){
        case 0:
            monthName="January";
            break;
        case 1:
            monthName="February";
            break;
        case 2:
            monthName="March";
            break;
        case 3:
            monthName="April";
            break;
        case 4:
            monthName="May";
            break;
        case 5:
            monthName="June";
            break;
        case 6:
            monthName="July";
            break;
        case 7:
            monthName="August";
            break;
        case 8:
            monthName="September";
            break;
        case 9:
            monthName="October";
            break;
        case 10:
            monthName="November";
            break;
        case 12:
            monthName="December";
            break;
        }                                                                                                                                                                   
    if(hr == 0){
        hr = 12;
    }
    if(hr >12){
        hr=hr-12;
        timeZone="PM";
    }
    
    hr = (hr<10) ? "0" + hr : hr;
    mm = (mm<10) ? "0" + mm : mm;
    sec= (sec<10)? "0" + sec: sec;


    if(hr>5  && timeZone=="AM")
        timeMessage="Good Morning";
    else if((hr>9  && timeZone=="PM")||(hr<5 && timezone=="AM"))
        timeMessage="Good Night";
    if(hr<5  && timeZone=="PM")
        timeMessage="Good Afternoon";
    else
        timeMessage="Good Evening";


    let currentTime= hr+":"+mm+":"+sec+" "+timeZone;
    let currentDay= c_Date+", "+monthName+", "+year;
    document.getElementById("message").innerHTML=timeMessage;
    document.getElementById("time").innerHTML=currentTime;
    // document.getElementById("day").innerHTML=dayName;
    document.getElementById("date").innerHTML=currentDay;
    setTimeout( time,1000);
}
time();