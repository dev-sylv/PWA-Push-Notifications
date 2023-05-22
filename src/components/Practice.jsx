import React from "react";
import notify from "react-push-notification";
import pwa from "../assets/pwa.png";

const Practice = () => {
  const pushPractice = () => {
    notify({
      title: "PWA Testing",
      icon: `${pwa}`,
      message: "Push notification practice",
      duration: 30000,
    //   native: true
    });
    console.log("first") 
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}>
        <div>Pratice</div>
        <br />
        <br />
        <br />
        <button onClick={pushPractice} style={{ padding: "10px 20px", cursor: "pointer" }}>
          click
        </button>
      </div>
    </div>
  );
};

export default Practice;
