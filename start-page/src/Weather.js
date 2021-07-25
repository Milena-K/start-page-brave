import { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=52.52437&lon=13.41053&exclude=minutely,daily&units=metric&appid=4b16c3dbf721721914db85c960690969")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result);
          this.setState({
            isLoaded: true,
            temp: result.current.temp
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, temp } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="weather">
          {temp + " °C"}
        </ul>
      )
    }
  }
}

export default Weather;
