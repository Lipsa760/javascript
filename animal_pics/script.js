const btn = document.getElementById("btn");
const animalContainer = document.querySelector(".animal-container");
const animalImg = document.querySelector(".animal-img");
const animalName = document.querySelector(".animal-name");

btn.addEventListener("click", async function () {
  try {
    animalImg.src = "spinner.svg";
    const response = await fetch(
      "https://api.unsplash.com/photos/random?client_id=XvPOlp0Ajyt5Uzeh9qcdTR4pPUDq0PrRlwISfb0x5LY&query=animals"
    );
    const data = await response.json();
    btn.innerText = "Get animals";
    animalContainer.style.display = "block";
    animalImg.src = data.links.download;
    animalName.innerText = data.alt_description;
  } catch (error) {
    console.log(error);
    btn.disabled = false;
    btn.innerText = "Get animal";
    animalName.innerText = "An error happened, please try again";
  }
});
