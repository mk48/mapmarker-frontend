//State
import { initialState, markerState } from "./initialState";
import { ADDRESS_CHANGE, ADD_NEW_BUTTON_CLICKED } from "./ActionTypes";

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
