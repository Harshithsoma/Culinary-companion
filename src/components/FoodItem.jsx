import styles from "./fooditem.module.css";

export default function FoodItem({ item, setFoodId }) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.itemtitle}>{item.title}</p>
      </div>
      <img className={styles.image} src={item.image} alt={item.title}></img>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(item.id);
            console.log(item.id);
          }}
          className={styles.viewButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
