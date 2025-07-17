import React from "react";
import { useState } from "react";
import "./Slide.scss";

const Slide = () => {
  const [image, setImage] = useState("");
  return (
    <div id="main">
      <div className="div-img">
        <img id="imgtag" alt="" src={image} />
      </div>
      <div id="secondmain">
        <a
          href="/fitness"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>General Training</h2>
            </div>
          </span>
        </a>
        <a
          href="/personal-training"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Personal Training</h2>
            </div>
          </span>
        </a>
        <a
          href="/group-classes"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Group Classes</h2>
            </div>
          </span>
        </a>
        <a
          href="/hiit-training"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>HIIT Training</h2>
            </div>
          </span>
        </a>
        <a
          href="/yoga"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Yoga</h2>
            </div>
          </span>
        </a>
        <a
          href="/boxing"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Boxing</h2>
            </div>
          </span>
        </a>
        <a
          href="/strength-conditioning"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Strength & Conditioning</h2>
            </div>
          </span>
        </a>
        <a
          href="/body-transformation"
          onMouseEnter={() => setImage("")}
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Body Transformation</h2>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Slide;
