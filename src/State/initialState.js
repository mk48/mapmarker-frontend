export const markerState = {
  id: 0,
  address: "",
  addressEdit: "",
  lat: "",
  lng: "",
  mode: "view",
  processing: false,
  errorMessage: false
};

export const initialState = {
  showAddButton: true,
  markersId: [],
  markers: []
};

//{ ...markerState, id: 0, address: "test", lat: 2.36547, lng: 8.25479 }
