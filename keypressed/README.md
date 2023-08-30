# KeyPressed -js

This is a simple HTML and JavaScript code that allows the user to enter a keyword and then displays the keyword on the screen.

## Step 1: HTML Code

The HTML code creates a simple container div with the class "container". This div will contain the input field and the button.

```
    <div class="container">Enter Any KeyWord</div>
```

## Step 2: CSS Code

The CSS code simply styles the container div.

## Step 3: JavaScript Code

The JavaScript code adds an event listener to the input field. When the user enters a keyword and presses the enter key, the keyword is displayed on the screen.

```
let container = document.querySelector(".container");

document.addEventListener("keydown", function (event) {
    container.innerText = "";
    console.log(event);
    // The parameter event is of the type KeyboardEvent
  	let h1 = document.createElement("h1");
    h1.innerText = ` You Pressed  ${event.key}`;
    let p = document.createElement("p");
    p.innerText = `${event.keyCode}`;
    container.appendChild(h1);
    container.appendChild(p);


});
```
