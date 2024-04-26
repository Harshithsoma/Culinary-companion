import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import Recipe from "./components/Recipe";
export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("660913");
  return (
    <div>
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <Recipe foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}
