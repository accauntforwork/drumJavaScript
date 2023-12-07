let audioElement;
document.addEventListener("click", function (event) {
  audioElement = document.getElementById(`audio${event.target.id}`);
  audioElement.play();
});
document.addEventListener("keydown", function (event) {
  audioElement = document.getElementById(`audio${event.key}`);
  audioElement.play();
  const pressedElement = document.getElementById(`${event.key}`);
  pressedElement.classList.add("pressed");
  setTimeout(() => {
    pressedElement.classList.remove("pressed");
  }, 300);
});
