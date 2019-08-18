import { ADDRESS_CHANGE, ADD_NEW_BUTTON_CLICKED } from "./../State/ActionTypes";

export default function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case ADD_NEW_BUTTON_CLICKED:
      return { ...state, isAddMode: true };

    case ADDRESS_CHANGE: {
      const id = action.data.id;

      const updatedMarkers = state.markers.map((marker, i) => {
        if (marker.id === id) {
          return { ...marker, address: action.data.text };
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
