import Item from "./Item";

export default function Ingredients({ food, isLoading }) {
  return (
    <div>
      {isLoading
        ? "Loading.."
        : food.extendedIngredients.map((ingredient) => (
            <Item ingredient={ingredient} />
          ))}
    </div>
  );
}
