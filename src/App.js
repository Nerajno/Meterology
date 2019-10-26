import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather"

const API_KEY = "a80186412681b67855d5994201e8b313";
const API_URL = "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=";
const API_UNITS = "&units=metric"

class App extends React.Component {
    getWeather = async (e) => {
      e.preventDefault();
      // console.log(e);
      const api_call = await fetch(`${API_URL}+${API_KEY}+${API_UNITS}`);
      const data = await api_call.json();
      console.log(data);
      console.log("blue");
      
    }
  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
        </div>
    );
  }
}

export default App;
