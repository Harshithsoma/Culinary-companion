import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem setFoodId={setFoodId} key={item.id} item={item} />
      ))}
    </div>
  );
}
