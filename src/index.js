import React from "react";
import ReactDOM from "react-dom";
import VotationsContextProvider from "./Context/VotationsContext";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <VotationsContextProvider>
      <App />
    </VotationsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
