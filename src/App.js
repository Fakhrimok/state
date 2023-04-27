import React, { Component } from "react";
import TimeSinceMount from "./TimeSinceMount";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Fakhri Mokni",
      bio: "Ex Helicopter Pilot",
      profession: "A Wannabe Developper",
      show: false,
      mountTime: Date.now(),
    };
  }
  show = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { mountTime } = this.state;
    return (
      <div>
        {this.state.show ? (
          <div
            style={{
              margin: "auto",
              width: 500,
              color: "white",
              backgroundColor: "DodgerBlue",
              padding: "10px",
              fontFamily: "Sans-Serif",
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            <img
              style={{ width: 400, borderRadius: 45 }}
              src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
            />
            <p>{this.state.fullName}</p> <p>{this.state.bio}</p>
            <p>{this.state.profession}</p>
          </div>
        ) : null}
        <button
          onClick={this.show}
          style={{
            display: "block",
            width: 50,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 25,
          }}
        >
          Magic
        </button>
        <div>
          <TimeSinceMount mountTime={mountTime} />
        </div>
      </div>
    );
  }
}
