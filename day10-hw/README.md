# Day10Homework

This is a simple HTML and JavaScript code that changes the background color of the webpage when the button is clicked.

### Step-1 - HTML File

The HTML code consists of a `<div>` element that contains a button. The button has an `onclick` event listener that calls the `changeBackgroundColor()` function when clicked.

```
    <div>
        <button>Change BackGroundColor</button>
    </div>
```

### Step 2 : css file

It gives the styling to the html file

### step-3 - JavaScript file

The JavaScript code consists of a single function called `changeBackgroundColor()`. This function changes the background color of the webpage by setting the `backgroundColor` property of the `body` element.

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
  var index = 0 ;
  var div = document.querySelector("div");
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  })
```
