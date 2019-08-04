import React from "react";

// components
import OpenStreetMap from "./OpenStreetMap";
//import GoogleMap from "./GoogleMap";

export default function Map() {
  return (
    <div data-testid="map" style={{width: '100%', height: '100%'}}>
      <OpenStreetMap />
    </div>
  );
}
