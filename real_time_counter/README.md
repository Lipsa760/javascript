## Real-time Character Counter

This is a simple real-time character counter that counts the number of characters in a textarea and displays the total number of characters and the number of remaining characters.

#### HTML file

The HTML code creates a simple webpage with a textarea and two paragraphs to display the total number of characters and the number of remaining characters.

```
    <div class="container">
      <h2>Real-time Charater Counter</h2>
      <textarea
        id="textarea"
        class="textarea"
        placeholder="Please write your text here..."
        maxlength="50"
      ></textarea>
      <div class="counter-container">
        <p>
          Total Charaters:
          <span class="total-counter" id="total-counter"></span>
        </p>
        <p>
          Remaining:
          <span class="remaining-counter" id="remaining-counter"></span>
        </p>
      </div>
    </div>
```

#### CSS file

The CSS code styles the textarea and the counter container.

#### JavaScript file

```
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
```
