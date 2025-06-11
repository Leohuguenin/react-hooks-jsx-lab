import React from "react";
import { name, city } from "../data/data.js";

const headerStyle = {
  color: "firebrick"
};

function Home() {
  return (
    <div id="home">Home
      <h1 style={headerStyle}>
        {name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;
