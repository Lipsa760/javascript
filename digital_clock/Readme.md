# Digital Clock :

This project demonstrates how to create a digital clock that displays the current time with AM and PM functionality on a website using HTML, CSS, and JavaScript.

### HTML

Created an HTML file (`index.html`) with a basic structure for the clock. Included a `<div>` element to display the time and a `<script>` tag to link the JavaScript file.

```
<div class="container">
        <h1>Digital Clock</h1>
        <div class="clock">
            <div id="time"></div>
        </div>
    </div>
```

### CSS Styling

Created a CSS file (`styles.css`) to style the clock and set the background image. Styled the clock elements, including hours, minutes, seconds.

### JavaScript Functionality

1. Created a JavaScript file (`script.js`) to update the clock's time and add AM/PM functionality.
2. Used the `Date` object to get the current time.
3. Determined whether it's AM or PM based on the current hour.
4. Converted the hours to a 12-hour format.
5. Updated the HTML to display the time in the format "hh:mm:ss AM/PM."
6. Utilized `setInterval` to update the time every second, ensuring it stays synchronized with the computer's time.
