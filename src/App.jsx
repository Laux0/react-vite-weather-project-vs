import React from "react";
import "./App.css";
import Search from "./Search.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        Open-sourced by Laura Rahmati on{" "}
        <a
          href="https://github.com/Laux0/react-vite-weather-project-vs"
          target="_blank"
          rel="moreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
