import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/* 
    1. Gift pack ---- bridal special change service section 
    
    2. Collbprators to bridal option 

    3. decor indoor outdoor
    */}
  </React.StrictMode>,
);
