import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather }>
                <input text="text" name="city" placeholder="City..." />
                <input text="text" name="country" placeholder="Country..." />
                <text> Or </text>
                <input text="number" name="zipcode" placeholder="12345"></input>
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;  