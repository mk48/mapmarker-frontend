import React from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

//CSS for leaflet
import "leaflet/dist/leaflet.css";

// for icon issue in Leafleet react
// refer: https://github.com/PaulLeCam/react-leaflet/issues/453
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function OpenStreetMap() {
  const position = [10.492268, 77.966493];
  return (
      <Map center={position} zoom={18} style={{ width: "100%", height: "600px" }}>
        <TileLayer attribution="" url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
  );
}
