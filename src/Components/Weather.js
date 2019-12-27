import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class Weather extends React.Component {
    render() {
        return (
            <div className="weatherResults">
                <p>Weather Results:</p>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p> Humidity: {this.props.humidity}%</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {/* {this.props.icon}  */}
                {this.props.error && <p>{this.props.error}</p>}
                <BootstrapSwitchButton
                    checked={false}
                    onlabel='C'
                    offlabel='F'
                    onChange={(checked: boolean) => {
                        this.setState({ isUserAdmin: checked })
                    }}
                />




            </div>
        );
    }
};

export default Weather;