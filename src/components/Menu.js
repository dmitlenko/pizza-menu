import { React } from "react";
import { pizzaData } from "../data";
import { Pizza } from "./Pizza";

export function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzasNum > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 creative dishes...</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are currently working on out menu. Please come back later.</p>
      )}
    </main>
  );
}
