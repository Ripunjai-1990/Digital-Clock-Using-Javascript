function updateClock(){
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe= "PM";


    if(hou == 0){
        hou = 12;
    }
    if(hou > 12){
        hou = hou-12;
        pe = "PM"
    }

     var months = ["January","February","march","April","may","June","July","August","September","October","November","Decemer"];
     var week = ["Sunday","Monday","Tuesday","Wednesday","Thursaday","Friday","Saturday"];
     var ids = ["dayname","month","daynum","year","hour","miniutes","seconds","period"];
     var values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];
      
     for(var i=0;i<ids.length;i++){
     document.getElementById(ids[i]).innerText = values[i];
     document.getElementById("minutes").innerText=now.getMinutes();
     document.getElementById("seconds").innerText=now.getSeconds();
     document.getElementById("hour").innerText=now.getHours();
     document.getElementById("dayname").innerText=week[dname];
     }
}

function initClock(){
    
    setInterval("updateClock()",1);
}
