let setTimerButton = document.querySelector(".setTimerButton");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let setTimerDiv = document.querySelector(".timerBlock");

setTimerButton.addEventListener("click", (e) => {
    let timerDiv = document.createElement("div");
    timerDiv.className = "timer";

    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";

    let hoursParagraph = document.createElement("p");
    hoursParagraph.textContent = hours.value + ":";

    let minutesParagraph = document.createElement("p");
    minutesParagraph.textContent = minutes.value + ":";

    let secondsParagraph = document.createElement("p");
    secondsParagraph.textContent = seconds.value;

    let startButton = document.createElement("button");
    startButton.className = "buttons";
    startButton.textContent = "Start";

    let stopButton = document.createElement("button");
    stopButton.className = "buttons";
    stopButton.textContent = "Stop";

    let resetButton = document.createElement("button");
    resetButton.className = "buttons";
    resetButton.textContent = "Reset";

    let newTimerButton = document.createElement("button");
    newTimerButton.className = "buttons";
    newTimerButton.textContent = "Set Timer";

    timerDiv.appendChild(hoursParagraph);
    timerDiv.appendChild(minutesParagraph);
    timerDiv.appendChild(secondsParagraph);
    buttonsDiv.appendChild(startButton);
    buttonsDiv.appendChild(stopButton);
    buttonsDiv.appendChild(resetButton);
    buttonsDiv.appendChild(newTimerButton);
    document.body.appendChild(timerDiv);

    if (timerDiv.textContent !== "") {
        setTimerDiv.style.display = "none";
        document.body.appendChild(buttonsDiv);
        startButton.addEventListener("click", start);
    }

    function start() {
        stopButton.addEventListener("click", stop);
        startButton.removeEventListener("click", start);
        resetButton.addEventListener("click", reset);
        let hoursValue = Number(hours.value);
        let minutesValue = Number(minutes.value);
        let secondsValue = Number(seconds.value);
        let hoursDefaultValue = hoursValue;
        let minutesDefaultValue = minutesValue;
        let secondsDefaultValue = secondsValue;
        let intervalId = setInterval(() => {
            if (secondsValue < 10) {
                secondsParagraph.textContent = "0" + secondsValue;
            }
            if (minutesValue < 10) {
                minutesParagraph.textContent = "0" + minutesValue + ":";
            }
            if (hoursValue < 10) {
                hoursParagraph.textContent = "0" + hoursValue + ":";
            }
            if (secondsValue === 0) {
                if (minutesValue === 0) {
                    if (hoursValue === 0) {
                        let ring = new Audio("ringtone.mp3");
                        ring.play();
                        stopButton.addEventListener("click", () => {
                            ring.pause();
                        });
                        resetButton.addEventListener("click", () => {
                            ring.pause();
                        });

                        clearInterval(intervalId);
                    } else {
                        if (hoursValue < 10) {
                            hoursParagraph.textContent = "0" + hoursValue + ":";
                            hoursValue--;
                            minutesValue = 59;
                        } else {
                            hoursParagraph.textContent = hoursValue + ":";
                            hoursValue--;
                            minutesValue = 59;
                        }
                    }
                } else {
                    if (minutesValue < 10) {
                        minutesValue--;
                        secondsValue = 59;
                        minutesParagraph.textContent = "0" + minutesValue + ":";
                    } else {
                        minutesParagraph.textContent = minutesValue + ":";
                        minutesValue--;
                        secondsValue = 59;
                    }
                }
            } else {
                if (secondsValue < 10) {
                    secondsParagraph.textContent = "0" + secondsValue;
                    secondsValue--;
                } else {
                    secondsParagraph.textContent = secondsValue;
                    secondsValue--;
                }
            }
        }, 1000);
        function stop() {
            startButton.addEventListener("click", start);

            clearInterval(intervalId);
        }
        function reset() {
            startButton.addEventListener("click", start);
            clearInterval(intervalId);
            if (hoursDefaultValue < 10) {
                hoursParagraph.textContent = "0" + hoursDefaultValue + ":";
            } else {
                hoursParagraph.textContent = hoursDefaultValue + ":";
            }
            if (minutesDefaultValue < 10) {
                minutesParagraph.textContent = "0" + minutesDefaultValue + ":";
            } else {
                minutesParagraph.textContent = minutesDefaultValue + ":";
            }
            if (secondsDefaultValue < 10) {
                secondsParagraph.textContent = "0" + secondsDefaultValue;
            } else {
                secondsParagraph.textContent = secondsDefaultValue;
            }

            // hoursParagraph.textContent = hoursDefaultValue + ":";
            // minutesParagraph.textContent = minutesDefaultValue + ":";
            // secondsParagraph.textContent = secondsDefaultValue;
        }
        newTimerButton.addEventListener("click", () => {
            startButton.addEventListener("click", start);
            clearInterval(intervalId);
            setTimerDiv.style.display = "initial";
            timerDiv.style.display = "none";
            buttonsDiv.style.display = "none";
        });
    }
});
