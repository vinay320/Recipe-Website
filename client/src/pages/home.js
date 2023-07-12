import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Hero } from "../components/hero/hero";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();
  const [user, setUser] = useState(null);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  // Redirecting to about component
  const redirectToAbout = () => {
    navigate("/recipe", {
      state: {
        name: data,
      },
    });
  };

  const handleData = (id) => {
    setData(id);
    console.log(data);
  };

  const isRecipeSaved = (id) => {
    return savedRecipes.includes(id); // Return the result of the check
  };

  return (
    <div>
      <Hero />
      <h1
        style={{
          justifyContent: "center",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Recipes
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          border: "none",
          listStyle: "none",
          padding: "0",
        }}
      >
        {recipes.map((recipe) => (
          <li
            key={recipe._id}
            style={{
              border: "none",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              width: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>{recipe.name}</h2>
              <button
                style={{
                  border: "2px solid #0000ee",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "#00bfff",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="instructions">
              {/* <p>{recipe.instructions}</p> */}
            </div>
            <img
              onMouseEnter={() => {
                handleData(recipe);
              }}
              onClick={redirectToAbout}
              src={recipe.imageUrl}
              alt={recipe.name}
              style={{ width: "100%", height: "auto", marginTop: "10px" }}
            />
            <p style={{ marginTop: "10px" }}>
              Cooking Time: {recipe.cookingTime} minutes
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
