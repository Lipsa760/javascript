# Mini-Calender

This is a simple mini calendar that displays the current month, day, and year. It is built using HTML, CSS, and JavaScript.

## HTML

The HTML code for the calendar is very simple. It consists of a few divs that contain the month name, day name, day number, and year.

```
 <div class="calendar-container">
      <p class="month-name" id="month-name">sept</p>
      <p class="day-name" id="day-name">Friday</p>
      <p class="day-number" id="day-number">1</p>
      <p class="year" id="year">2020</p>
    </div>
    <script src="index.js"></script>
```

## CSS 

The CSS code for the calendar is also very simple. It sets the styles for the different elements of the calendar.

## JavaScript

The JavaScript code for the calendar is responsible for updating the month, day, and year when the user clicks on the next or previous month buttons.

```javascript
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});
dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
```
