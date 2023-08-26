# Assignment - change shape and color

This is a simple HTML, CSS, and JavaScript project that creates a circle that can change color and shape.

## step-1 : HTML

The HTML code creates a container div with a circle div inside it. The circle div has a shape div inside it. The shape div is initially a circle, but can be changed to a triangle by clicking the "change shape" button.

```
    <div class="container">
    <div id="circle">
        <div class="shape"></div>
    </div>
    <button id="color">change color</button>
    <button id="changeShape">change shape</button>
</div>
```

### Step-2 : css file

It gives the styling to the html file . It positioned the circle in center of the page and center the shapes inside the circle.

## step-3 : JavaScript

The JavaScript code adds event listeners to the "change color" and "change shape" buttons. The "change color" button changes the background color of the circle div to a random color. The "change shape" button changes the shape of the shape div from a circle to a triangle and vice versa.

```
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
const circle = document.getElementById("circle");
const shape = document.querySelector(".shape");
const Changecolor = document.querySelector("#color");
const changeShape = document.querySelector("#changeShape");
Changecolor.addEventListener("click", () => {
  if (index === Color.length) {
    index = 0;
  }
  circle.style.backgroundColor = Color[index];
  index++;
});
var Tringle = false;
changeShape.addEventListener("click", () => {
  if (!Tringle) {
    var Shape = document.querySelector(".shape");
    Shape.className = "triangle";
    Tringle = true;
  } else {
    var shape = document.querySelector(".triangle");
    shape.className = "shape";
    Tringle = false;
  }
});
```
