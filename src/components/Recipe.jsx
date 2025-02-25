import { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Recipe({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (foodId) {
      async function fetchData() {
        const response = await fetch(
          `${URL}/${foodId}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      }
      fetchData();
    }
  }, [foodId]);

  return foodId ? (
    <div className="rounded-xl w-full max-w-2xl shadow-[0_4px_8px_rgb(0,0,0,0.2)] m-[20px_auto] p-[30px] overflow-hidden custom-font">
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">{food.title}</h1>
        <img
          className="max-w-full h-auto rounded-lg mb-[10px]"
          src={food.image}
          alt={food.title}
        ></img>
        <div className="mb-[20px] flex justify-between align-center">
          <span>
            <strong>🕐{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🍽️{food.servings} Servings</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div className="mb-[20px]">
          <span>
            <strong>
              $ {(food.pricePerServing / 100).toFixed(1)} Per Serving
            </strong>
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">Ingredients</h1>
        {isLoading ? (
          <p className="text-xl font-bold mb-[10px]">Loading...</p>
        ) : (
          <IngredientList food={food} />
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">Instructions</h1>
        {isLoading ? (
          <p className="text-xl font-bold mb-[10px]">Loading...</p>
        ) : (
          <ol className="list-decimal list-inside">
            {food.analyzedInstructions[0].steps.map((step) => (
              <li className="mb-[10px]" key={step.number}>
                {step.step}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  ) : (
    <div className="rounded-lg w-full max-w-xs shadow-[0_4px_6px_rgb(0,0,0,0.1)] m-[20px] p-[20px] overflow-hidden">
      Click on "Show Recipe" to view full recipe!
    </div>
  );
}
