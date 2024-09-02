import React, { useState } from "react";
import "./App.css";
import MapUploader from "./map.js";
import Menu from "./menu.js";


function App() {
  const [park_data, setPark_data] = useState(null);

  return (
    <div className="App">
        <MapUploader setPark_data={setPark_data}/>
        <Menu park_data={park_data}/>
    </div>
  );
};


export default App;