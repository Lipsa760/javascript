# todolist

This is the simple to-do-list website in which you add your daily data.

### step 1 : Html file

HTML code creates a div element in which their is two element that is input element and a ADD button to add your data.
Then in another div that is task div show your data.

```<div id="addtask">
    <input type="text" required id="input_task" placeholder="Enter your task here*" />
    <button id="add">ADD</button>
    <div id="task">
    </div>
  </div>
```

### Step 2 : css file

It gives the styling to the html file

### step 3 : Javascript file

Here I use a inbuilt javascript function that is addEventListener() for target and add the list.

```Button.addEventListener("click", () => {
const newText = text.value;
const newParagraph = document.createElement("p");
newParagraph.textContent = newText;
paragraph.appendChild(newParagraph);
text.value = "";
});```
