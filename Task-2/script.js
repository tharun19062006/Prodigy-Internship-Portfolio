let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

// Format time function
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formatted =
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss) +
        ":" +
        (ms < 10 ? "0" + ms : ms);

    return formatted;
}

// Start timer
function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = timeToString(elapsedTime);
        }, 10);
        running = true;
    }
}

// Pause timer
function pauseTimer() {
    clearInterval(timerInterval);
    running = false;
}

// Reset timer
function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    display.textContent = "00:00:00";
    elapsedTime = 0;
    lapsList.innerHTML = "";
}

// Lap timer
function addLap() {
    if (running) {
        const lapTime = timeToString(elapsedTime);
        const li = document.createElement("li");
        li.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
        lapsList.appendChild(li);
    }
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);
