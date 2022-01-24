import './App.css';
import React, { Component, useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';

export default function App() {
  const [recipeData, setRecipeData] = useState([])

  //const [recipes, selectedRecipe] = recipeData;


  /*const selectRecipe = (index) => {
    console.log('selectRecipe', index);
    //here goes await fetch recipes
    setRecipeData({
      ...recipeData
    });
  }*/
  useEffect(() => {
    (async () => {
      const response = await fetch('recipes.json');
      const recipes = await response.json();
      recipes.map(async recipe => {
        const r = await fetch(`${recipe.id}`);
        const theRecipe = await r.json();
        console.log(theRecipe);
      });

    })();
    return () => {
      //reset id
    }
  }, []);

  return (
    <div className='container-fluid'>
      <div className='text-center'>
        <Header />
        <Routes>
          <Route index element={<RecipeList />} />

          <Route path='/recipe/:id' element={<RecipeDetails />} />

          {/*<Route path='*' element={<h5 style={{ color: 'red' }}>This is not the page you are looking for - 404</h5>} />*/}

          <Route path='*' element={<Navigate to='/' replace="true" />} />
        </Routes>
        <Outlet />
        <hr />
        <ClickCounter />
      </div>
    </div>
  );
}



