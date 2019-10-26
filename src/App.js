import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather"


 const cors_api_host = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8cbf1d9409a55b2a68c52e994d8777e/37.8267,-122.4233';

class App extends React.Component {

    getWeather = async (e) => {
      e.preventDefault();
      // console.log(e);
      const api_call = await fetch(`${cors_api_host}`);
      const data = await api_call.json();
      console.log(api_call);
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
