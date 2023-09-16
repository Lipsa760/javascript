## Movie Search

This is a simple movie search web that allows users to search for movies by name. The app is built using HTML, CSS, and JavaScript.

## Step 1

Create a new file called `index.html` in your project folder with this content:

```
    <div id="container">
      <input
        type="text"
        id="movieSearch"
        placeholder="Enter Movie Name here"
      />
      <button id="search">Search</button>
    </div>
    <div id="root"></div>

```

## Step 2

It will contain all of our CSS code for styling purposes.

## Step 3

Create a new file in the components folder called index.js and add this code to it:

```
const movie = document.getElementById("movieSearch");
const btn = document.getElementById("search");
const root = document.getElementById("root");
async function getMovie() {
  root.innerText = "";
  let movieName = movie.value;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?&apikey=bce5f182&s=${movieName}`
    );
    let data = await response.json();
    console.log(data);
    const movieList = data.Search;
    console.log(movieList);

    movieList.forEach((movie) => {
      console.log(movie);
      getMovies(movie);
    });

    function getMovies(movie) {
      const newDiv = document.createElement("div");
      newDiv.id = "rootDiv";
      newDiv.innerHTML = `
      <div id ="imgDiv"><img src = ${movie.Poster}</div>
      <h3 id ="titleDiv">${movie.Title} </h3></br>
      <p id ="YearDiv">${movie.Year}</p>
      `;
      root.appendChild(newDiv);
    }
    movie.value = "";
  } catch (error) {
    console.log(error, "error");
  }
}

btn.addEventListener("click", getMovie);

```
