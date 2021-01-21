import Globe from "react-globe.gl";
import Map from "./light-earth.png";
import MapDark from "./earth-dark.jpg";
import Countries from "./countries.json";
import "./App.css";
import { useState } from "react";

function App() {
  let [mapbg, setMapbg] = useState(Map);
  return (
    <div className="App">
      <button
        onClick={() => {
          setMapbg(Map);
        }}
      >
        light
      </button>
      <button
        onClick={() => {
          setMapbg(MapDark);
        }}
      >
        dark
      </button>
      <Globe
        globeImageUrl={mapbg}
        hexPolygonsData={Countries.features}
        hexPolygonColor={() => "#f00"}
        hexPolygonResolution={3}
        hexPolygonAltitude={0}
        hexPolygonMargin={0.1}
      />
      ,
    </div>
  );
}

export default App;
