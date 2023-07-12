import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import '../App.css'
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    
    <div className="bg-blue-200 w-[80%] items-center flex justify-around rounded-md m-4 h-[80px]">
      <Link className="text-black text-[25px]" to="/">Home</Link>
      <Link className="text-black text-[25px] " to="/create-recipe">Create Recipe</Link>
      <Link className="text-black text-[25px] " to="/saved-recipes">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link className="text-black text-[25px] " to="/auth">Login/Register</Link>
      ) : (
        <button className="text-black text-[25px] " onClick={logout}> Logout </button>
      )}
    </div>

    
  );
};
