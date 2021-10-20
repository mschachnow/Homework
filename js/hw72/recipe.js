(async function () {
    'use strict';



    async function fetchRecipes(file) {
        const response = await fetch(file);
        const recipes = await response.json();
        console.log(recipes);
        return recipes;

    }
    const recipes = await fetchRecipes('list.json');
    recipes.forEach(async recipe => {
        $('#recipeForm').append([`<input type="radio" name="recipes" value=${recipe.name}>`, `<label for=${recipe.name}>${recipe.name}</label>`]);

        console.log(recipe);
    });
    $("input[name='recipes']").click(async function () {
        const value = $('input[name=recipes]:checked').val();
        const loadRecipe = await fetchRecipes(`${value}.json`);
        $('#nameOfRecipe').text(loadRecipe.name);
        $('#pictureOfRecipe').attr('src', loadRecipe.picture);
        $('#ingredientsOfRecipe').text(loadRecipe.ingredients);


        return loadRecipe;
    });



}());