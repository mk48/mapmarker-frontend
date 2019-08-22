import uuid4 from "uuid";

//State
import { markerState } from "./initialState";
import {
  ADDRESS_CHANGE,
  ADD_NEW_BUTTON_CLICKED,
  ADD_NEW_CANCEL_BUTTON_CLICKED,
  UPDATE_CANCEL_BUTTON_CLICKED,
  EDIT_BUTTON_CLICKED,
  DELETE_BUTTON_CLICKED,
  SAVE_SUCCESS,
  SAVE_ERROR,
  ADDRESS_NOT_FOUND_ERROR
} from "./ActionTypes";

export default function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case ADD_NEW_BUTTON_CLICKED: {
      //============================================= + button =============================================
      const newId = uuid4();
      const markers = [...state.markers, { ...markerState, id: newId, mode: "add" }];
      const markersId = [...state.markersId, newId];

      return {
        ...state,
        markers: markers,
        markersId: markersId,
        showAddButton: false
      };
    }

    case EDIT_BUTTON_CLICKED: {
      //============================================= edit button =============================================
      const id = action.data.id;

      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, mode: "edit", addressEdit: marker.address };
        } else {
          return marker;
        }
      });

      return {
        ...state,
        markers: updatedMarkers
      };
    }

    case UPDATE_CANCEL_BUTTON_CLICKED: {
      //============================================= update - cancel button =============================================
      const id = action.data.id;

      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, mode: "view" };
        } else {
          return marker;
        }
      });

      return {
        ...state,
        markers: updatedMarkers
      };
    }

    case DELETE_BUTTON_CLICKED:
    case ADD_NEW_CANCEL_BUTTON_CLICKED: {
      //============================================= Add new - cancel button =============================================
      const id = action.data.id;
      // remove marker from marker list
      const updatedMarkers = state.markers.filter(marker => marker.id !== id);

      // remove the marker ID from markerID list
      const updatedMarkersIds = state.markersId.filter(mid => mid !== id);

      return {
        ...state,
        showAddButton: true,
        markers: updatedMarkers,
        markersId: updatedMarkersIds
      };
    }

    case ADDRESS_CHANGE: {
      //============================================= Address textbox change =============================================
      const id = action.data.id;
      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, addressEdit: action.data.text };
        } else {
          return marker;
        }
      });

      return {
        ...state,
        markers: updatedMarkers
      };
    }

    case SAVE_SUCCESS: {
      //============================================= save success =============================================
      const id = action.data.id;
      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return {
            ...marker,
            mode: "view",
            address: marker.addressEdit,
            lat: action.data.latlng.lat,
            lng: action.data.latlng.lng,
            errorMessage: false
          };
        } else {
          return marker;
        }
      });

      return {
        ...state,
        showAddButton: true,
        markers: updatedMarkers
      };
    }

    case ADDRESS_NOT_FOUND_ERROR: {
      //============================================= address not found =============================================
      const id = action.data.id;
      const updatedMarkers = updateMarker(state.markers, id, { errorMessage: "Address not found" });

      return {
        ...state,
        markers: updatedMarkers
      };
    }

    case SAVE_ERROR: {
      //============================================= save error - server side errors =============================================
      const id = action.data.id;
      const updatedMarkers = updateMarker(state.markers, id, { errorMessage: action.data.errorMsg });

      return {
        ...state,
        markers: updatedMarkers
      };
    }

    default:
      return state;
  }
}

//=============================================== Private function ===============================================

function updateMarker(markers, markerId, newValues) {
  const updatedMarkers = markers.map((marker, i) => {
    if (marker.id === markerId) {
      return {
        ...marker,
        ...newValues
      };
    } else {
      return marker;
    }
  });

  return updatedMarkers;
}
