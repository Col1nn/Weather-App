import Form from "./Form";
import List from "./List";
import { Component } from "react";

class App extends Component {
  state = {
    value: "",
    city: "",
    date: "",
    sunrise: "",
    sunset: "",
    temp: "",
    humidity: "",
    pressure: "",
    error: false,
  };

  insertCity = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCity = (e) => {
    const key = `3183a96df565da03e2b17f0e5fea92d4`;
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${key}&units=metric`;
    e.preventDefault();
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("INVALID INPUT");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((prevState) => ({
          error: false,
          city: prevState.value,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        }));
      })
      .catch((error) => {
        this.setState((prevState) => ({
          error: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          insertCity={this.insertCity}
          handleCity={this.handleCity}
        />
        <List weather={this.state} />
      </div>
    );
  }
}

export default App;
