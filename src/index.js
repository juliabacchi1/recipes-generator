// Submit Button

function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#informations", {
    strings: "Text here",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let recipesElement = document.querySelector("#recipes-form");
recipesElement.addEventListener("submit", generateRecipe);
