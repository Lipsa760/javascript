# Drawing App

A basic web-based paint application built using HTML, CSS, and JavaScript. This app allows users to draw on a canvas, clear the drawing, and undo the last drawn stroke.

## HTML

The paint app consists of a canvas element where users can draw.

## CSS

The canvas is styled using CSS to provide a border.

## Javascript

Drawing: When the user presses the mouse button (mousedown) on the canvas, the startPosition function is triggered. This sets the painting flag to true and records the initial position. The mousemove event triggers the draw function, which draws lines on the canvas as the mouse moves. When the user releases the mouse button (mouseup), the endPosition function is called, and the drawn stroke is saved as an ImageData object in the strokes array.

Clear: The "Clear" button clears the entire canvas by using the clearRect method. It also clears the strokes array to remove any saved strokes.

Undo: The "Undo" button uses the putImageData method to redraw the previously saved strokes when clicked. The undoButton event listener removes the last stroke from the strokes array and calls the redraw function, which iterates through the strokes array and redraws the saved strokes.
