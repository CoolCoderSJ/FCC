let break_length = 5;
let session_length = 25;
let timer = 25 * 60;
let timer_running = false;
let timer_type = "session";

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    break_length = 5;
    document.getElementById("break-length").innerHTML = break_length;
    session_length = 25;
    document.getElementById("session-length").innerHTML = session_length;
    timer = 25 * 60;
    document.getElementById("time-left").innerHTML = "25:00";
    timer_running = false;
    timer_type = "session";
});

document.getElementById("break-increment").addEventListener("click", function() {
    if (break_length < 60 && !timer_running) {
    break_length++;
    document.getElementById("break-length").innerHTML = break_length;
    }
});

document.getElementById("break-decrement").addEventListener("click", function() {
    if (break_length > 1) {
    break_length--;
    document.getElementById("break-length").innerHTML = break_length;
    }
});

document.getElementById("session-increment").addEventListener("click", function() {
    if (session_length < 60 && !timer_running) {
    session_length++;
    document.getElementById("session-length").innerHTML = session_length;
    timer = session_length * 60;
    document.getElementById("time-left").innerHTML = session_length + ":00";
    }
});

document.getElementById("session-decrement").addEventListener("click", function() {
    if (session_length > 1) {
    session_length--;
    document.getElementById("session-length").innerHTML = session_length;
    timer = session_length * 60;
    document.getElementById("time-left").innerHTML = session_length + ":00";
    }
});

document.getElementById("start_stop").addEventListener("click", function() {
    if (timer_running) {
    timer_running = false;
    } else {
    timer_running = true;
    }
});

function update_timer() {
    if (timer_running) {
    timer--;
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("time-left").innerHTML = minutes + ":" + seconds;

    if (timer === 0) {
        document.getElementById("beep").play();
        if (timer_type === "session") {
        timer = break_length * 60;
        timer_type = "break";
        } else {
        timer = session_length * 60;
        timer_type = "session";
        }
    }
}
}

setInterval(update_timer, 1000);