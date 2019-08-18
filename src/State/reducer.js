//State
import { initialState, markerState } from "./initialState";
import {
  ADDRESS_CHANGE,
  ADD_NEW_BUTTON_CLICKED,
  ADD_NEW_CANCEL_BUTTON_CLICKED
} from "./ActionTypes";

export default function reducer(state, action) {
  //console.log(action);

  switch (action.type) {
    case ADD_NEW_BUTTON_CLICKED: {
      const markers = [...state.markers, { ...markerState, mode: "add" }];
      const markersId = [...state.markersId, state.markers.length];

      return {
        ...state,
        markers: markers,
        markersId: markersId,
        showAddButton: false
      };
    }

    case ADD_NEW_CANCEL_BUTTON_CLICKED: {
      const id = action.data.id;

      // remove marker from marker list
      const updatedMarkers = state.markers.filter(marker => marker.id != id);

      // remove the marker ID from markerID list
      const updatedMarkersIds = state.markersId.filter(mid => mid != id);

      return {
        ...state,
        showAddButton: true,
        markers: updatedMarkers,
        markersId: updatedMarkersIds
      };
    }

    case ADDRESS_CHANGE: {
      const id = action.data.id;

      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, address: action.data.text };
        } else {
          return marker;
        }
      });

      return {
        ...state,
        markers: updatedMarkers
      };
    }
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      return state;
  }
}
