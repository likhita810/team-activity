
import React, { Component } from "react";
import "./FinalPage.css"; // Import your CSS for the smoke effect
import BackgroundSons from './song.mp3'

class SmokeTextReveal extends Component {
  constructor(props) {
    super(props);
    // this.audioRef = React.createRef();
  }

  generateBubbles() {
    const bubbleCount = 20; // Number of bubbles to create
    const bubbles = [];

    for (let i = 0; i < bubbleCount; i++) {
      const sizeClass = this.getRandomSizeClass();
      const leftPosition = Math.random() * 100; // Random horizontal position

      bubbles.push(
        <div
          key={i}
          className={`bubble ${sizeClass}`}
          style={{ left: `${leftPosition}%` }}
        ></div>
      );
    }

    return bubbles;
  }

  getRandomSizeClass() {
    const sizes = ["small", "medium", "large"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  render() {
    return (
      <>
        <div className="smoke-text-container">
          <div className="smoke-text">
            <div className="header">
          <h1>Team Members </h1>
          </div>
            <div className="director">
              <img src="https://i.pinimg.com/736x/db/c1/dd/dbc1ddbee2423466fdca81c9d7ebda94.jpg"></img>
              <h1>Lokesh</h1>
            </div>
            <div>
              <img src="https://cdn.vectorstock.com/i/preview-1x/20/54/screenplay-typographic-header-person-create-vector-44532054.jpg"></img>
              <h1>Likhita</h1>
            </div>
            <div className="screenwriter">
              <img src="https://www.shutterstock.com/image-vector/screenwriter-typographic-header-concept-person-260nw-1728062488.jpg"></img>
              <h1>Anil</h1>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/81JsAyKd35L.jpg"></img>
              <h1>Naresh</h1>
            </div>
            <div className="cameraman">
              <img src="https://png.pngtree.com/png-clipart/20210711/original/pngtree-silhouette-camera-man-holding-an-image-stabilizer-png-image_6511586.jpg"></img>
              <h1>Pavan</h1>
            </div>
            </div>
          </div>
        <audio autoPlay loop controls>
          <source src={BackgroundSons} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="bubble-container">{this.generateBubbles()}</div>
      </>
    );
  }
}

export default SmokeTextReveal;
