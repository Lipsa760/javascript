var Color = [
  "green",
  "navyblue",
  "cyan",
  "black",
  "Crimson",
  "voilet",
  "blue",
  "pink",
  "maroon",
  "indigo",
  "yellow",
  "beige",
  "purple",
  "orange",
  "aqua",
  "lime",
];
var index = 0;
var div = document.querySelector("div");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  if (index === Color.length) {
    index = 0;
  }
  div.style.backgroundColor = Color[index];
  index++;
});
