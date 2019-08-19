export const markerState = {
  id: 0,
  address: "",
  lat: "",
  lng: "",
  mode: "view",
  processing: false,
  errorMsg: false
};

export const initialState = {
  showAddButton: true,
  markersId: [0],
  markers: [
    { ...markerState, id: 0, address: "test", lat: 2.36547, lng: 8.25479 }
  ]
};
