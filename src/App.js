import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather"

const API_KEY = "a80186412681b67855d5994201e8b313";
const API_URL = "https://openweathermap.org/data/2.5/weather?q=London,uk&";
const API_UNITS = "&units=metric"

class App extends React.Component {
    getWeather = () => {
      const api_call = await fetch(``);
    }
  render(){
    return(
      <div>
        <Titles/>
        <Form/>
        <Weather/>
        </div>
    );
  }
}

export default App;
