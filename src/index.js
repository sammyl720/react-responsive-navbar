import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
