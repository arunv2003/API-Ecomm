import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartState from "./context/CartState.jsx";
import UsersState from "./context/UsersState.jsx";
createRoot(document.getElementById("root")).render(
  <UsersState>
    <CartState>
      <App />
    </CartState>
  </UsersState>
  
  
);
