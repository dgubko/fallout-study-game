var startButton = document.getElementById("start-btn");
var form = document.querySelector("#gear-block form");

startButton.addEventListener("click", function () {
  var gear = document.getElementById("gear-block");
  gear.classList.add("animated");

  startButton.style.display = "none";

  setInterval(() => {
    gear.classList.remove("animated");
    form.style.display = "flex";
  }, 1500);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = event.target.elements.character;
  if (input) {
    if (input.value) {
      localStorage.setItem("character", input.value);
      input.value = "";
      window.location = "./game.html";
    } else {
      input.classList.add("errored");
    }
  }
});

form.addEventListener("input", function (event) {
  event.target.classList.remove("errored");
});
