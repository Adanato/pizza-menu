import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
//Styling
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const cssss = {};
  return (
    <header className="header">
      <h1 style={cssss}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3> {props.pizzaObj.name}</h3>
        <p> {props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + "$"}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're opne until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>
            We're closed until {openHour}:00. Come early in the morning for some
            fresh pizza.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//React.render(<App/>);
