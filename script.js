const datePicker = document.getElementById("date");
const displayDays = document.getElementById("days");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
let Interval = null;

datePicker.addEventListener("change", () => {
  if (new Date(datePicker.value) > new Date()) {
    Interval = setInterval(function countDown() {
      const totalSeconds =
        Number(new Date(datePicker.value) - new Date()) / 1000;
      const daysLeft = Math.floor(totalSeconds / 3600 / 24);
      const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
      const minutesLeft = Math.floor(totalSeconds / 60) % 60;
      const secondsLeft = Math.floor(totalSeconds) % 60;

      displayDays.innerText = daysLeft;
      displayHours.innerText = hoursLeft;
      displayMinutes.innerText = minutesLeft;
      displaySeconds.innerText = secondsLeft;
    }, 1000);
  } else {
    alert("Please enter a valid date!");
    if (Interval != null) {
      clearInterval(Interval);
    }
    let display = [displayDays, displayHours, displayMinutes, displaySeconds];
    display.forEach((item) => {
      item.innerText = "00";
    });
  }
});
