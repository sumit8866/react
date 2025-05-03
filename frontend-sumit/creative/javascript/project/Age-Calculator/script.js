let result = document.getElementById("result");

function calculateAge() {
    let date1 = new Date(document.getElementById("date").value);
    let date2 = new Date();

    let store = date2.getTime() - date1.getTime();
    let age = new Date(store);
    let year = date2.getTime()-date1.getTime();
    let years = Math.floor(year / (1000 * 60 * 60 * 24 * 365.25));
    let months = age.getMonth();
    let days = age.getDate();
    
    console.log(`Hey!! You are ${years} years, ${months} months, ${days} days old.`);
    result.innerHTML = `Hey!! You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span> days old.`;
  
    
   
}
 