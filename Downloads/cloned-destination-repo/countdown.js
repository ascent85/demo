function countdown() {
  var days = document.getElementById("days");
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");

  var now = new Date().getTime();
  var cincoDeMayo = new Date("May 5, 2024 00:00:00").getTime();
  var difference = cincoDeMayo - now;

  var remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  var remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  days.textContent = remainingDays < 10 ? "0" + remainingDays : remainingDays;
  hours.textContent = remainingHours < 10 ? "0" + remainingHours : remainingHours;
  minutes.textContent = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
  seconds.textContent = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
  }
}

var countdownInterval = setInterval(countdown, 1000);
