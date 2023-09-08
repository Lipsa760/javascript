# animal Pics Generator

This web application allows you to generate random animal images and display their descriptions using the Unsplash API. When you click the "Get animal" button, it fetches a random animal image from Unsplash and displays it along with a description.

### HTML

The `index.html` file provides the structure for the web page. It includes:

- A title.
- A "Get Animal" button.
- A container to display the Animal image and description.

### CSS

1. The `style.css` file contains styles to improve the appearance of the web page.

### JavaScript

1. The `script.js` file adds interactivity to the web page. It includes:

   - Event listener on the "Get Animal" button that triggers a function when the button is clicked.

   - When the button is clicked:

     - It changes the Animal image source to a loading spinner (spinner.svg) to indicate that data is being fetched.
     - It makes a fetch request to the Unsplash API to get a random Animal image.
     - It updates the image source with the fetched Animal image.
     - It updates the Animal description with the fetched description.

   - If there is an error during the fetch process:
     - It logs the error to the console.
     - It re-enables the "Get Animal" button.
     - It updates the button text to "Get Animal" and displays an error message.
