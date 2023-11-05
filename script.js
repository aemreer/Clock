let name = document.getElementById("name");

let newName = prompt("Write Your Name");
name.innerHTML = `Merhaba, ${newName}`;



let hrs =document.getElementById("hrs");
let min =document.getElementById("min");
let sec =document.getElementById("sec");
let day =document.getElementById("day");


function showTime(){

    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    if(min.innerHTML < 10){
        min.innerHTML = "0" + currentTime.getMinutes();
    }
    sec.innerHTML = currentTime.getSeconds();
    if(sec.innerHTML < 10){
        sec.innerHTML = "0"+ currentTime.getSeconds();
    }
   
    
    day.innerHTML = weekday[currentTime.getDay()];

}
setInterval(showTime,0);



