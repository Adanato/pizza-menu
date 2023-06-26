import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/pinaci.jpg" alt="Pizza spinaci"></img>
      <h2> Pizza </h2>
    </div>
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
