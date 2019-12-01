import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather } className="inputForm">
                <input text="text" name="city" placeholder="City..." />
                <br/>
                <input text="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;  