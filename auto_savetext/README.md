## Auto Save Textarea

### Step 1: HTML

Create an HTML file and include the following code:

```
    <div class="container">
        <h1>Auto Save Textarea :Ronak sharma</h1>
        <textarea id="myTextarea" rows="10" cols="20" placeholder="Start typing ...."></textarea>
    </div>

```

### Step 2: CSS

CSS file style the html file .

### Step 3: JavaScript

Create a JavaScript file and include the following code:

```
const textarea = document.getElementById("myTextarea");

function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}
textarea.addEventListener("input", saveToLocalStorage);

```
