import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Weather extends React.Component {
    render() {
        return (
            <div className="weatherResults">
                <p>Weather Results:</p>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p> Humidity: {this.props.humidity}%</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {/* {this.props.icon}  */}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;