function play(e) {
  let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  let div = document.querySelector(`div[data-key = "${e.keyCode}"]`);

  if (!audio) return;
  div.classList.add("active");
  audio.currentTime = 0;
  audio.play();
}

function removeActive(e) {
  if (e.propertyName != "transform") return;
  e.target.classList.remove("active");
}
let keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => addEventListener("transitionend", removeActive));
window.addEventListener("keydown", play);
