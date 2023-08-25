## DropDowns

This is a simple HTML and JavaScript code that allows you to change the properties of a div element.
### Step 1: HTML file
The HTML code creates a container div inside this container there are many dropdowns and a target div which style will be change. 
example:
```<div class="container">
    <label for="color">Color:</label>
    <select id="color">
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="cyan">Cyan</option>
      <option value="gray">Gray</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
      <option value="teal">Teal</option>
      <option value="white">White</option>
      <option value=""></option>
    </select>
    <label for="backgroundcolor">Background Color:</label>
    <select id="backgroundcolor">
      <option value="white">White</option>
      <option value="lightgray">Light Gray</option>
      <option value="lightblue">Light Blue</option>
      <option value="maroon">Maroon</option>
      <option value="aqua">Aqua</option>
      <option value="teal">Teal</option>
      <option value="salmon">Salmon</option>
      <option value="navy">Navy</option>
    </select>
</div>
  <div id="targetDiv">Geekster a great learning platform for Fullstack Web Development</div> ```

  ### Step 2 : css file
  It gives the styling to the html file
### step 3 : JavaScript file
Here I use a inbuilt javascript function that is addEventListener() for target the properties and change the properties when we click the properties
Example-
color.addEventListener('change', () => {
  targetDiv.style.color = color.value;
});
Here the color will be changed when we click any color from the dropdown option.
