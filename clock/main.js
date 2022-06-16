let hour_div = document.getElementById("hour");
let minute_div = document.getElementById("minute");
let second_div = document.getElementById("second");
let meridan = document.getElementById
("am");



setInterval(()=>{
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if(hours > 12){
  hours = hours - 12;
  meridan.textContent = "PM";
}

if(hours < 10){
  hours = "0" + hours;
}
if(minutes < 10){
  minutes = "0" + minutes;
}
if(seconds < 10){
  seconds = "0" + seconds;
}

  minute_div.textContent = minutes;
  second_div.textContent = seconds;
  hour_div.textContent = hours;
});
