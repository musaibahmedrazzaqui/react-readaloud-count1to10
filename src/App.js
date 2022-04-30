import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactAudioPlayer from "react-audio-player";
import { render } from "react-dom";
import cover from "./images/cover.png";
import P1 from "./images/p1.png";
import P2 from "./images/p2.png";
import P3 from "./images/p3.png";
import P4 from "./images/p4.png";
import P5 from "./images/p5.png";
import P6 from "./images/p6.png";
import P7 from "./images/p7.png";
import P8 from "./images/p8.png";
import P9 from "./images/p9.PNG";
import P10 from "./images/p10.PNG";
import "./styles.css";

const pages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

const alerting = () => {
  alert("Audio Playing");
};

export default function App() {
  return (
    <div className="App">
      <h1 onClick={alerting}>Learn to count from 1 to 9</h1>
      <ReactAudioPlayer
      src="https://drive.google.com/file/d/1qFwD-AAXGPpeG2CFB-YSwsBl-eXlvRh8/view?usp=sharing"
      autoPlay
      controls
      />
      <div className="book">
        <HTMLFlipBook
          width={675}
          height={540}
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          style={{ background: "lavender" }}
        >
          <div className="demoPage">
            <img src={cover} alt="cover" />
          </div>
          {pages.map((page, i) => (
            <div className="demoPage" key={i}>
              <img src={page} alt={i} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
  render(<App />, document.getElementById("root"));
}

