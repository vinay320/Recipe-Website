import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
// import { Recipe } from "./recipe";
import {useNavigate } from "react-router-dom";
export const SavedRecipes = () => {
  // const [user, setUser] = useState(null);
  const [data,setData]=useState("");
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();
  const navigate = useNavigate();

//   redirecting to about component
  const redirectToAbout = () => {
    navigate("/recipe", {
        state: {
            name:data,
        },
    });
  };
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
    // eslint-disable-next-line
  }, []);

  const handleData =(id) => {      
    setData(id);
    console.log(data);
  };
  return (
    <div>
      <h1 style={{justifyContent:"center",fontSize:"50px",textAlign:"center"}}>Saved Recipes</h1>
      <ul style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center",border:"none" }}>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id} className="border-none bg-white rounded-md">
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img onMouseEnter={()=>{
              handleData(recipe)
            }
            
            } style={{width:"400px",height:"400px",marginTop:"10px"}} src={recipe.imageUrl} alt={recipe.name}/>
            
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
            <button className="border-[2px]  p-1 rounded-lg bg-blue-300 hover:bg-blue-500" onClick={redirectToAbout}>View</button>
            
          </li>
          
        ))}
      </ul>
    </div>
  );
};
