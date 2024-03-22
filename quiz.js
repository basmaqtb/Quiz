
const stratTimer = 15;
let time = stratTimer * 60;
const timer = document.getElementById('countdown');
setInterval(updateTimer, 1000);
function updateTimer () {
const minutes = Math.floor(time/60);
let seconds = time % 60;
seconds = seconds < 10 ? '0' + seconds : seconds;
timer.innerHTML =`${minutes}:${seconds}`;
time--;
}