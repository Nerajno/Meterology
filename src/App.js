import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather"

class App extends React.Component {

    getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      const Api_Key ='0e9298136c7c17273ccec159a274dc0f';
      // const cors_api_host = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8cbf1d9409a55b2a68c52e994d8777e/37.8267,-122.4233';
      const cors_api_host = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`;

      const api_call = await fetch(`${cors_api_host}`);
      const data = await api_call.json();
    
     console.log(data);
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
