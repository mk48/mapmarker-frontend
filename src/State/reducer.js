//State
import { initialState, markerState } from "./initialState";
import {
  ADDRESS_CHANGE,
  ADD_NEW_BUTTON_CLICKED,
  ADD_NEW_CANCEL_BUTTON_CLICKED,
  UPDATE_CANCEL_BUTTON_CLICKED,
  SAVE_BUTTON_CLICKED,
  UPDATE_BUTTON_CLICKED,
  EDIT_BUTTON_CLICKED
} from "./ActionTypes";

export default function reducer(state, action) {
  //console.log(action);

  switch (action.type) {
    case ADD_NEW_BUTTON_CLICKED: {
      //============================================= + button
      const newId = state.markers.length;
      const markers = [
        ...state.markers,
        { ...markerState, id: newId, mode: "add" }
      ];
      const markersId = [...state.markersId, newId];

      return {
        ...state,
        markers: markers,
        markersId: markersId,
        showAddButton: false
      };
    }

    case EDIT_BUTTON_CLICKED: {
      //============================================= edit button
      const id = action.data.id;

      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, mode: "edit" };
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
      //============================================= update - cancel button
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

    case ADD_NEW_CANCEL_BUTTON_CLICKED: {
      //============================================= Add new - cancel button
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
      //============================================= Address textbox change
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

    case SAVE_BUTTON_CLICKED: {
      //============================================= save button
      const id = action.data.id;
      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, mode: "view", errorMsg: false };
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

    default:
      return state;
  }
}
