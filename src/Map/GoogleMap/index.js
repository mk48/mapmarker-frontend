import React from "react";

// map components
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%"
};

function GoogleMapContainer({ google }) {
  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 10.492268, lng: 77.966493 }}
    >
      <Marker position={{ lat: 10.492268, lng: 77.966493 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD4SpUxzb3w9vip0J49iuQyA6z879Mt4Gk"
})(GoogleMapContainer);
