import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
// import "./Fitness.scss";

import "./Fitness.css";
import SimpleSlider from "./FitnessSlider";
import { Footer } from "../index";

const Fitness = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return loading__Status ? (
    <div className="loading__Screen">
      {" "}
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <div>
      <Navbar path="services" />
      <div className="fitness-body" style={{ paddingTop: "60px" }}>
        {/* Start coding from here */}
        <div className="pagemain">
          <div className="Fitnesshome">
            <h1 style={{ color: "white", fontSize: "48px", textAlign: "center", marginBottom: "20px" }}>
              General Training
            </h1>
            <p style={{ color: "#8f9193", fontSize: "20px", textAlign: "center", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" }}>
              Build strength, endurance, and overall fitness with our comprehensive general training programs designed for all fitness levels.
            </p>
            <button className="btn">START YOUR JOURNEY</button>
            
            <div className="training-features" style={{ display: "flex", justifyContent: "space-around", margin: "60px 0", flexWrap: "wrap" }}>
              <div className="feature-card" style={{ 
                background: "rgba(255, 255, 255, 0.1)", 
                padding: "30px", 
                borderRadius: "15px", 
                textAlign: "center", 
                margin: "10px",
                minWidth: "250px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                <h3 style={{ color: "white", marginBottom: "15px" }}>Strength Training</h3>
                <p style={{ color: "#8f9193", lineHeight: "1.6" }}>
                  Build muscle mass and increase strength with progressive resistance training using free weights, machines, and bodyweight exercises.
                </p>
              </div>
              
              <div className="feature-card" style={{ 
                background: "rgba(255, 255, 255, 0.1)", 
                padding: "30px", 
                borderRadius: "15px", 
                textAlign: "center", 
                margin: "10px",
                minWidth: "250px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                <h3 style={{ color: "white", marginBottom: "15px" }}>Cardiovascular Fitness</h3>
                <p style={{ color: "#8f9193", lineHeight: "1.6" }}>
                  Improve heart health and endurance through running, cycling, rowing, and high-intensity interval training sessions.
                </p>
              </div>
              
              <div className="feature-card" style={{ 
                background: "rgba(255, 255, 255, 0.1)", 
                padding: "30px", 
                borderRadius: "15px", 
                textAlign: "center", 
                margin: "10px",
                minWidth: "250px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                <h3 style={{ color: "white", marginBottom: "15px" }}>Flexibility & Mobility</h3>
                <p style={{ color: "#8f9193", lineHeight: "1.6" }}>
                  Enhance range of motion and prevent injuries with stretching, yoga, and mobility exercises integrated into every session.
                </p>
              </div>
            </div>
            <div style={{width:"85%",margin:"auto"}}>
              <SimpleSlider />
            </div>
            {/* <SimpleSlider /> */}
            <div className="secondhalf">
              <h2 style={{ color: "white", fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
                Training Programs
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
                <div style={{ 
                  background: "rgba(255, 255, 255, 0.05)", 
                  padding: "25px", 
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <h3 style={{ color: "white", marginBottom: "15px", fontSize: "24px" }}>Beginner Program</h3>
                  <ul style={{ color: "#8f9193", lineHeight: "1.8", paddingLeft: "20px" }}>
                    <li>Foundation building exercises</li>
                    <li>Proper form instruction</li>
                    <li>Gradual progression</li>
                    <li>2-3 sessions per week</li>
                    <li>45-60 minute workouts</li>
                  </ul>
                </div>
                
                <div style={{ 
                  background: "rgba(255, 255, 255, 0.05)", 
                  padding: "25px", 
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <h3 style={{ color: "white", marginBottom: "15px", fontSize: "24px" }}>Intermediate Program</h3>
                  <ul style={{ color: "#8f9193", lineHeight: "1.8", paddingLeft: "20px" }}>
                    <li>Advanced strength training</li>
                    <li>HIIT cardio sessions</li>
                    <li>Performance tracking</li>
                    <li>3-4 sessions per week</li>
                    <li>60-75 minute workouts</li>
                  </ul>
                </div>
                
                <div style={{ 
                  background: "rgba(255, 255, 255, 0.05)", 
                  padding: "25px", 
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <h3 style={{ color: "white", marginBottom: "15px", fontSize: "24px" }}>Advanced Program</h3>
                  <ul style={{ color: "#8f9193", lineHeight: "1.8", paddingLeft: "20px" }}>
                    <li>Powerlifting techniques</li>
                    <li>Olympic lifting</li>
                    <li>Advanced conditioning</li>
                    <li>4-5 sessions per week</li>
                    <li>75-90 minute workouts</li>
                  </ul>
                </div>
              </div>
              
              <div style={{ 
                background: "rgba(255, 255, 255, 0.08)", 
                padding: "40px", 
                borderRadius: "15px",
                marginBottom: "40px",
                textAlign: "center"
              }}>
                <h2 style={{ color: "white", marginBottom: "20px", fontSize: "32px" }}>Why Choose General Training?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
                  <div>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>🏋️‍♂️ Expert Guidance</h4>
                    <p style={{ color: "#8f9193" }}>Certified trainers provide personalized attention and ensure proper form</p>
                  </div>
                  <div>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>📊 Progress Tracking</h4>
                    <p style={{ color: "#8f9193" }}>Monitor your fitness journey with detailed progress reports and analytics</p>
                  </div>
                  <div>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>🎯 Goal-Oriented</h4>
                    <p style={{ color: "#8f9193" }}>Customized programs designed to help you achieve your specific fitness goals</p>
                  </div>
                  <div>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>🔄 Flexible Scheduling</h4>
                    <p style={{ color: "#8f9193" }}>Choose from multiple time slots that fit your busy lifestyle</p>
                  </div>
                </div>
              </div>
              <div style={{ 
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))", 
                padding: "50px", 
                borderRadius: "20px",
                textAlign: "center",
                marginBottom: "40px"
              }}>
                <h2 style={{ color: "white", marginBottom: "20px", fontSize: "36px" }}>Ready to Transform Your Fitness?</h2>
                <p style={{ color: "#8f9193", fontSize: "18px", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
                  Join thousands of members who have achieved their fitness goals with our comprehensive general training programs.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                  <button style={{
                    background: "#f27a1a",
                    color: "white",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}>
                    BOOK FREE CONSULTATION
                  </button>
                  <button style={{
                    background: "transparent",
                    color: "white",
                    border: "2px solid white",
                    padding: "15px 30px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}>
                    VIEW SCHEDULE
                  </button>
                </div>
              </div>
              <div style={{width:"80%",margin:"auto"}} className="Elite">
                <div className="EliteContent">
                  <div className="marginleft">
                    {/* <img
                     
                      className="cp1"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_6.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png"
                      alt="img"
                    /> */}
                    <p className="unlim">
                      Unlimted access to <br />
                      everything in your city{" "}
                    </p>
                    <p className="cp">Unlimted access to</p>
                    <p className="cp">✓ All ELITE & PRO GYMS</p>
                    <p className="cp">✓ At-home live workouts</p>
                    <p className="cp">Starting at ₹1269/month</p>
                    <button className="btn-try">TRY FOR FREE</button>
                    <button className="btn-buy">BUY NOW</button>
                  </div>
                </div>
                <div className="Eliteimg">
                  <img
                     style={{width:"100%"}}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
                    alt="img"
                  />
                </div>
              </div>

              <div className="PRO">
                <div className="PROimg">
                  <img
                    style={{width:"100%"}}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
                    alt="img"
                  />
                </div>
                <div className="PROContent">
                  <div className="marginleft1">
                    {/* <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_5.84,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png"
                      alt="img"
                      className="cp1"
                    /> */}
                    <p className="unlim1">
                      Unlimited access to <br />
                      PRO gyms in your city{" "}
                    </p>
                    <p className="cp1">Unlimted access to</p>
                    <p className="cp1">✓ All PRO gyms</p>
                    <p className="cp1">✓ At home live workouts</p>
                    <p className="cp1">Starting at ₹769/month</p>
                    <button className="btn-try1">TRY FOR FREE</button>
                    <button className="btn-buy1">BUY NOW</button>
                  </div>
                </div>
              </div>

              <div className="culttransform">
                {/* <img
                  style={{width:"100%"}}
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_750,ar_1738:763/dpr_2/image/vm/c93e221a-607f-4dda-87c5-5b7b4a8662b0.png"
                  alt="img"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fitness;
