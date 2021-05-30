import './App.css';
import React,{useEffect, useState} from "react";
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '2d7805f3';
  const APP_KEY = '3d97ae3b01ef3e9c24e0cb7cd035a240';
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState("chicken");
  const [query, setQuery] = useState('Chicken');

  const getRecipes = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  useEffect(() => {
    getRecipes(query);
  }, [query]);
  
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <p className="creator"> Made by: Geoffrey </p>
      <div className="title-wrapper">
        <h1 className="title"> Recipes</h1>
      </div>
       <form onSubmit = {getSearch} className = "search-form">
         <input default="chicken" className="search-bar" type='text' value={search} onChange={updateSearch}/>
         <button className = "search-button" type='sumbit'>Search</button>
       </form>
       <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key = {recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} />
        ))}
       </div>
 
       

    </div>
  );
}

export default App;
