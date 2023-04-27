import React from 'react';

class TimeSinceMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSinceMount: 0
    };
    this.intervalID = null;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceMount = Math.floor((currentTime - this.props.mountTime) / 1000);
      this.setState({ timeSinceMount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { timeSinceMount } = this.state;
    return (
      <div>
        <p>Time since mount: <span style={{color:"red",}}>{timeSinceMount}</span> seconds</p>
      </div>
    );
  }
}

export default TimeSinceMount;
