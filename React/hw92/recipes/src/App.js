import React, { useState } from 'react';
import './App.css';
import RecipeDetails from './RecipeDetails';
//import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';

export default function App() {
  const [recipeData, setRecipeData] = useState({
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN1PSDxd-BLz0GkvhLbrehSXm7b7AMQsJOw&usqp=CAU'
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'meat', 'tomato'],
        directions: ['slice', 'grill', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKKB9oMfqOovzgqR0B7ws7aOiJtvhpHOqDw&usqp=CAU'
      }
    ], selectedRecipe: 0
  });
  const { recipes, selectedRecipe } = recipeData;

  const selectRecipe = (index) => {
    console.log('selectRecipe', index);

    setRecipeData({
      ...recipeData,
      selectedRecipe: index
    });
  }

  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>PCS Recipes</h1>
        <hr />
        <h4>recipes</h4>
        <RecipeList recipes={recipes} selectRecipe={selectRecipe} />
        <hr />
        <RecipeDetails recipe={recipes[selectedRecipe]} />
        <hr />
        <ClickCounter />
      </div>
    </div>
  );
}
