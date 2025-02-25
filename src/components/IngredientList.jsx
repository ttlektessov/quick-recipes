export default function IngredientList({ food }) {
  return (
    <>
      {food.extendedIngredients.map((ingredient) => (
        <div key={ingredient.id} className="mb-[10px]">
          <div className="flex items-center gap-[10px] rounded-xl p-[10px] shadow-[0_4px_8px_rgb(0,0,0,0.2)]">
            <img
              src={
                `https://img.spoonacular.com/ingredients_100x100/` +
                ingredient.image
              }
              alt={ingredient.name}
            ></img>
            <h3 className="text-lg ml-[20px]">
              <strong>{ingredient.name}</strong>
            </h3>
            <h3 className="italic">
              {ingredient.amount} {ingredient.unit}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
}
