import FoodList from "./components/FoodList";
import Footer from "./components/Footer";
import InnerContaier from "./components/InnerContainer";
import Nav from "./components/Nav";
import Recipe from "./components/Recipe";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { useState, useRef, useEffect } from "react";

function App() {
  const [foodData, setFoodData] = useState(() => {
    const savedFoodData = localStorage.getItem("foodData");
    return savedFoodData ? JSON.parse(savedFoodData) : [];
  });
  const [foodId, setFoodId] = useState(() => {
    const savedFoodId = localStorage.getItem("foodId");
    return savedFoodId || "";
  });
  const recipeRef = useRef(null);

  const handleShowRecipe = (id) => {
    setFoodId(id);
  };

  useEffect(() => {
    localStorage.setItem("foodData", JSON.stringify(foodData));
  }, [foodData]);

  useEffect(() => {
    localStorage.setItem("foodId", foodId);
  }, [foodId]);

  useEffect(() => {
    if (recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [foodId]);

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <RecipeContainer>
        <InnerContaier>
          <FoodList foodData={foodData} setFoodId={handleShowRecipe} />
        </InnerContaier>
        <InnerContaier>
          <div ref={recipeRef}>
            <Recipe foodId={foodId} />
          </div>
        </InnerContaier>
      </RecipeContainer>
      <Footer />
    </>
  );
}

export default App;
