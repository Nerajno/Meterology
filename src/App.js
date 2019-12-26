import React from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

class App extends React.Component {
	state = {
		city: undefined,
		state: undefined,
		country: undefined,
		temperature: undefined,
		humidity: undefined,
		description: undefined,
		icon: undefined,
		error: undefined
	};

	getWeather = async (e) => {
		e.preventDefault();

		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		
		//const zipcode = e.target.elements.zipcode.value;

		const Api_Key = '0e9298136c7c17273ccec159a274dc0f';
		// const cors_api_host = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8cbf1d9409a55b2a68c52e994d8777e/37.8267,-122.4233';
		const cors_api_host = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`;
		
		// const cors_api_host2 = `http://samples.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${Api_Key}`;
		// => Use a function with a switch statement to check if which part of the form is used

		const api_call = await fetch(`${cors_api_host}`);
		//console.log(api_call);
		const data = await api_call.json();
		//console.log(data);
		if (city && country) {
			console.log(data);
			this.setState({
				city: data.name,
				country: data.sys.country,
				temperature: data.main.temp,
				humidity: data.main.humidity,
				description: data.weather[0].description, // data.weather[0].main
				icon: data.weather[0].icon,
				error: undefined
			})
		} else {
			this.setState({
				// city : undefined,
				// country: undefined,
				// temperature: undefined,
				// humidity: undefined,
				// description: undefined,
				// icon: undefined,
				error: 'Please complete the form.'
			})
		}
	};

	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="title-container">
									<Titles />
									<div className="form-container ">
										<Form getWeather={this.getWeather} />
										<Weather				
											city={this.state.city}
											country={this.state.country}
											temperature={this.state.temperature}
											humidity={this.state.humidity}
											description={this.state.description} // data.weather[0].main
											icon={this.state.icon}
											error={this.state.error}
										/>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
				);
			}
		}
		
		export default App;
