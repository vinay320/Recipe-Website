import React from "react";
import { useLocation} from "react-router-dom";

export const Recipe = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location)

  // const redirectToHome = () => {
  //   navigate("/");
  // };
  
  return (
    <div  style={{display:"flex",justifyItems:"center",justifyContent:"space-around",gap:"300px",margin:"40px"}}>
    <div>
        <img src={location.state.name.imageUrl} className="rounded-lg" alt="iamge_"/>
    </div>
    <div>
        <h1>{location.state.name.name}</h1>
        <h2>Cooking Time: {location.state.name.cookingTime}</h2>
        <ul>
            Ingredients
            {
            location.state.name.ingredients.map((x,idx)=>
            {
                return <li style={{listStyle:"none",border:"none"}} key={idx}>{x}</li>;
            })
            }
        </ul>
        <h4>Instructions</h4>
        <p>{location.state.name.instructions}</p>
    </div>
    </div>
  );
};