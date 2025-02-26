document.addEventListener("DOMContentLoaded", async function () {
    const cocktailNameElement = document.getElementById("cocktail-name");
    const cocktailImgElement = document.getElementById("cocktail-img");
    const cocktailInstructionsElement = document.getElementById("cocktail-instructions");

    async function fetchCocktail() {
        try {
            console.log("Fetching cocktail data..."); // Debugging log
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Fetched data:", data); // Debugging log

            // Select the first cocktail result
            const cocktail = data.drinks[0];

            cocktailNameElement.textContent = cocktail.strDrink;
            cocktailImgElement.src = cocktail.strDrinkThumb;
            cocktailImgElement.style.display = "block"; // Show the image
            cocktailInstructionsElement.textContent = cocktail.strInstructions;
            
        } catch (error) {
            console.error("Error fetching cocktail:", error);
            cocktailNameElement.textContent = "Failed to load cocktail.";
            cocktailInstructionsElement.textContent = "";
        }
    }

    fetchCocktail(); // Fetch cocktail when the page loads
});