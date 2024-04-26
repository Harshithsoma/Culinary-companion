import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = "8713f73dce1545f3bde9f4bd123dfce2";
  const [query, useQuery] = useState("biryani");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${API_URL}?query=${query}&apiKey=${apiKey} `
      );
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => useQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
