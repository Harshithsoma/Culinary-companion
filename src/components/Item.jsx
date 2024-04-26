import styles from "./item.module.css";

export default function Item({ ingredient }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` +
              ingredient.image
            }
          />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
