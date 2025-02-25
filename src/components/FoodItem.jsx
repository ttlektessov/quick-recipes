export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="rounded-lg w-full max-w-xs shadow-[0_4px_6px_rgb(0,0,0,0.1)] m-[20px] overflow-hidden font-sans text-[#393e46]">
      <img className="h-auto max-w-full" src={food.image} alt={food.title} />
      <div className="text-center my-[20px]">
        <p className="text-base color-[#393e46] font-semibold">{food.title}</p>
      </div>
      <div className="mb-[20px] flex justify-around text-center">
        <button
          className="bg-[#00b4d8] border-none text-white p-[10px] text-xs font-semibold cursor-pointer rounded-xl"
          onClick={() => {
            setFoodId(food.id);
          }}
        >
          Show Recipe
        </button>
      </div>
    </div>
  );
}
