import { Component } from 'react';
class Clock extends Component {
  constructor(props) {
    super(props);
    var date = this.getTimeString();
    this.state = {
      time: date
    }
  }
  getTimeString() {
    var date = new Date(Date.now()).toLocaleTimeString();
    date = date.slice(0, date.length - 2);
    return date;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clear);
  }
  render() {
    return(
      <p className="clock">{this.state.time}</p>
    )
  }
}

export default Clock;
