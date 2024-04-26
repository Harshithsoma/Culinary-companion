import { useEffect } from "react";
import { useState } from "react";
import styles from "./recipe.module.css";
import Ingredients from "./Ingredients";
export default function Recipe({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);
  console.log({ foodId });
  const API_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "8713f73dce1545f3bde9f4bd123dfce2";
  console.log(API_URL);
  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${API_URL}?apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.name}>{food.title}</h1>
        <img className={styles.image} src={food.image}></img>
        <div className={styles.details}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥬 Vegetarian" : "🍗 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>🧑‍🧑‍🧒‍🧒 Serves {food.servings}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 80} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <Ingredients food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading
              ? "Loading.."
              : food.analyzedInstructions[0].steps.map((instruction) => (
                  <li>{instruction.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
