function setSeconds() {
  const now = new Date();

  const seconds = (now.getSeconds() / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${seconds}deg)`;

  const minutes = (now.getMinutes() / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutes}deg)`;

  const hours = (now.getHours() / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hours}deg)`;
}

let hoursHand = document.querySelector(".hours");
let minutesHand = document.querySelector(".minutes");
let secondsHand = document.querySelector(".seconds");
setInterval(setSeconds, 1000);
