import { useState } from "react";
import Weather from "./Weather.jsx";

export default function Search() {
  let [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <Weather city={city} />
    </div>
  );
}
