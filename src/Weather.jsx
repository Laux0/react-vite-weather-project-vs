import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [emoji, setEmoji] = useState("");

  function setData(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setEmoji(response.data.condition.icon_url);
  }

  useEffect(() => {
    if (props.city) {
      let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=83bco8b8afca3aft80c7a9a59f08542a&units=metric`;
      axios.get(url).then(setData);
    }
  }, [props.city]);

  if (props.city) {
    return (
      <ul>
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {Math.round(wind)}km/h</li>
        <li>
          <img src={emoji} />
        </li>
      </ul>
    );
  } else {
    return <p></p>;
  }
}
