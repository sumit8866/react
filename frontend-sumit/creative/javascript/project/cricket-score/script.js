let runs = 0;
let wickets = 0;
let legalBalls = 0;
let deliveries = [];
let extras = 0;
let partnership = 0;

let printdata = []

let batsmen = ["Player A", "Player B", "Player C", "Player D", "Player E","Player F", "Player G", "Player H", "Player I", "Player J"];
let bowlers = ["Bowler 1", "Bowler 2", "Bowler 3", "Bowler 4", "Bowler 5","Bowler 1", "Bowler 2", "Bowler 3", "Bowler 4", "Bowler 5"];
let strikerIndex = 0;
let nonStrikerIndex = 1;
let nextBatsmanIndex = 2;
let bowlerIndex = 0;
let ball="0"

function updateDisplay() {
    let overs = Math.floor(legalBalls / 6);
    let ballsInOver = legalBalls % 6;
    let oversFormatted = `${overs}.${ballsInOver}`;
    let runRate = legalBalls > 0 ? (runs / legalBalls * 6).toFixed(0) : "0.00";
    let projectedScore = (runRate * 20).toFixed(0);
    
    document.getElementById('runs').innerText = `Runs: ${runs}`;
    document.getElementById('wickets').innerText = `Wickets: ${wickets}`;
    document.getElementById('overs').innerText = `Overs: ${oversFormatted}`;
    document.getElementById('runRate').innerText = `Run Rate: ${runRate}`;
    document.getElementById('extras').innerText = `Extras: ${extras}`;
    document.getElementById('total').innerText = `Total: ${runs + extras}`;
    document.getElementById('partnership').innerText = `Partnership: ${partnership}`;
    document.getElementById('projectedScore').innerText = `Projected Score (20 overs): ${projectedScore}`;
    document.getElementById('striker').innerText = `Striker: ${batsmen[strikerIndex]}`;
    document.getElementById('nonStriker').innerText = `Non-Striker: ${batsmen[nonStrikerIndex]}`;
    document.getElementById('bowler').innerText = `Bowler: ${bowlers[bowlerIndex]}`;
    
    let total = runs + extras;

   

    let object={oversFormatted,ball, wickets, extras,total};
  
    
    if(oversFormatted ||ball||wickets||extras){
        printdata.push(object)
        console.log(printdata)
        let table =document.getElementById("table").innerHTML;
        if (printdata.length > 0) {
          table = "<tr><th>Overs</th><th>Runs</th><th>Wickets</th><th>Extras</th><th>Total</th></tr>";
         printdata.map((item) => {
            table += "<tr><td>" + item.oversFormatted + "</td><td>" + item.ball + "</td><td>" + item.wickets + "</td><td>" + item.extras + "</td><td>"+item.total+"</td></tr>";
          } );
          table += "</table>";
          document.getElementById("table").innerHTML = table;
        }
    }

}
function addRun(num) {
    runs += num;
    legalBalls++;
    partnership += num;
    deliveries.push({ type: 'run', value: num });
    ball = String(num);
    if (num % 2 === 1) swapStrike();
    checkOverComplete();
    updateDisplay();
}

function swapStrike() {
    [strikerIndex, nonStrikerIndex] = [nonStrikerIndex, strikerIndex];
}

function changeBowler() {
    bowlerIndex = (bowlerIndex + 1) % bowlers.length;
}

function checkOverComplete() {
    if (legalBalls % 6 === 0 && legalBalls !== 0) {
        swapStrike();
        changeBowler();
    }
}



function addWicket() {
    if (wickets < 10) {
        wickets++;
        legalBalls++;
        deliveries.push({ type: 'wicket' });
        strikerIndex = nextBatsmanIndex;
        nextBatsmanIndex++;
        partnership = 0;
        ball = "Wicket";
        checkOverComplete();
        updateDisplay();
    }
}

function addWideBall() {
    runs += 1;
    extras += 1;
    deliveries.push({ type: 'wide' });
    ball = "Wide";

    updateDisplay();
}

function addDotBall() {
    legalBalls++;
    deliveries.push({ type: 'dot' });
    ball = "0";
    checkOverComplete();
    updateDisplay();
}

function deleteLast() {
    let last = deliveries.pop()
   
   
    if (!last) return;

    if (last.type === 'run') {
        runs -= last.value;
        legalBalls--;
        partnership -= last.value;
        if (last.value % 2 === 1) swapStrike();
    } else if (last.type === 'wicket') {
        wickets--;
        legalBalls--;
        nextBatsmanIndex--;
        partnership = 0;
        strikerIndex = batsmen.indexOf(`Player ${String.fromCharCode(65 + nextBatsmanIndex - 1)}`);

    } else if (last.type === 'wide') {
        runs -= 1;
        extras -= 1;
    } else if (last.type === 'dot') {
        legalBalls--;
    }

    printdata.pop()
    updateDisplay();
}



{
    printdata.pop()
    let table =document.getElementById("table").innerHTML;
    if (printdata.length > 0) {
      table = "<tr><th>Overs</th><th>Runs</th><th>Wickets</th><th>Extras</th><th>Total</th></tr>";
     printdata.map((item) => {
        table += "<tr><td>" + item.oversFormatted + "</td><td>" + item.ball + "</td><td>" + item.wickets + "</td><td>" + item.extras + "</td><td>"+item.total+"</td></tr>";
      } );
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
}


function reset() {
    runs = 0;
    wickets = 0;
    legalBalls = 0;
    deliveries = [];
    extras = 0;
    partnership = 0;
    strikerIndex = 0;
    nonStrikerIndex = 1;
    nextBatsmanIndex = 2;
    bowlerIndex = 0;
    ball=0
    printdata = [];
    updateDisplay();
}



updateDisplay();