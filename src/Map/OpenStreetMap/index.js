import React from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

//CSS for leaflet
import "leaflet/dist/leaflet.css";

export default function OpenStreetMap() {
  const position = [10.492268, 77.966493];
  return (
    <div>
      <Map center={position} zoom={18} style={{ width: "100%", height: "600px" }}>
        <TileLayer attribution="" url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}
