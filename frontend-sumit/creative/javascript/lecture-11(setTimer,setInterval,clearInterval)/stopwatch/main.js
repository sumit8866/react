
{
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let start;
  
  function formatTime(item) {
    return item.toString().padStart(2,'0');
  }
  
  function updateTime() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }
  
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
    if (hours >= 24) {
      hours = 0;
    }
  
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
    document.getElementById("watch").innerHTML=timeString
  }
  
  function changestart() {
   
      start = setInterval(updateTime, 10);
    
  }
  
  function changestop() {
    clearInterval(start);
    
  }
  
  function changereset() {
    changestop(); 
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds=0
    document.getElementById("watch").innerHTML = "00:00:00.000"
  }
}
