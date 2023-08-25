const Button = document.getElementById("add");
const text = document.getElementById("input_task");
const paragraph = document.getElementById("task");

Button.addEventListener("click", () => {
  const newText = text.value;
  const newParagraph = document.createElement("p");
  newParagraph.textContent = newText;
  paragraph.appendChild(newParagraph);
  text.value = "";
});
