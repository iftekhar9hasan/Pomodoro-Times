let isRunning = false;
let defaultTimerDuration = 1500; // Default to 25 minutes
let timerDuration = defaultTimerDuration;
let timerId;

const display = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const settingsButton = document.getElementById('settings');
const modal = document.getElementById('settings-modal');
const closeButton = document.querySelector('.close');
const applyButton = document.getElementById('apply');
const currentYear = new Date().getFullYear();


startButton.addEventListener('click', function() {
    if (!isRunning) {
        startTimer();
        isRunning = true;
    }
});

stopButton.addEventListener('click', function() {
    stopTimer();
    isRunning = false;
});

resetButton.addEventListener('click', function() {
    resetTimer();
});

settingsButton.addEventListener('click', function() {
    modal.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

applyButton.addEventListener('click', function() {
    const time = document.getElementById('time').value;
    const backgroundImage = document.getElementById('background-image').value;
    
    applySettings(time, backgroundImage);
    modal.style.display = 'none';
});

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(function() {
        if (timerDuration <= 0) {
            clearInterval(timerId);
            alert('Time is up!');
            resetTimer();
        } else {
            timerDuration--;
            updateDisplay();
        }
    }, 1000);
}


function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    stopTimer();
    timerDuration = defaultTimerDuration; 
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timerDuration / 60);
    const seconds = timerDuration % 60;
    display.textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}


document.getElementById('current-year').textContent = currentYear;


function applySettings(time, backgroundImage) {
    defaultTimerDuration = time * 60;
    timerDuration = defaultTimerDuration;
    updateDisplay();


    if (backgroundImage) {
        document.body.style.backgroundImage = `url('assets/${backgroundImage}')`;
        document.body.style.backgroundColor = '';
    } else {
        document.body.style.backgroundImage = '';
    }
}

settingsButton.addEventListener('click', function() {
    modal.style.display = 'flex';
});


var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if(mySong.paused){
        mySong.play();  
        icon.src="media/pause.png";
    } else {
        mySong.pause();
        icon.src = "media/play.png";
    }
}


updateDisplay();






