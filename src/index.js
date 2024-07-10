function displayRecipe(response) {
  // Typewriter plugin
  new Typewriter("#informations", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

// Submit Button

function generateRecipe(event) {
  event.preventDefault();

  // API Url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4b59c6fof3bta7634229de85af0382e7";
  let prompt = `Create a delicious recipe using the following ingredients: ${instructionsInput.value}. Make sure the recipe is practical and tasty`;
  let context =
    "You are an intelligent culinary assistant called Kichen Assistant AI Generator. Your goal is to help users create delicious and creative recipes using the ingredients they have available at home. Users will provide the ingredients they have in their refrigerators, and your task is to generate a practical and tasty recipe using those ingredients. Please put a title recipe and separate each line and ingredient with a <br />. Sign the recipe with 'KA AI Generator' inside a <strong> element at the end of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Hide the informations before the event click
  let informationsElement = document.querySelector("#informations");
  informationsElement.classList.remove("hidden");
  informationsElement.innerHTML = `<div class="generating">⏳ Generating a Recipe </div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipesElement = document.querySelector("#recipes-form");
recipesElement.addEventListener("submit", generateRecipe);
