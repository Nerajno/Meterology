import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather"

// const API_KEY = '0e9298136c7c17273ccec159a274dc0f';
// const cors_api_host = 'cors-anywhere.herokuapp.com/';
// const cors_api_https = 'https://';
const API_URL = 'https://api.darksky.net/forecast/f8cbf1d9409a55b2a68c52e994d8777e/37.8267,-122.4233';
// const API_UNITS = '&units=metric';

class App extends React.Component {
    getWeather = async (e) => {
      e.preventDefault();
      // console.log(e);
      
      const api_call = await fetch(`${API_URL}`);
      const data = await api_call.json();
      console.log(api_call);
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
