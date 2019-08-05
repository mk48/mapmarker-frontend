import { NEW_ADDRESS_CHANGE } from "./../State/ActionTypes";

export default function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case NEW_ADDRESS_CHANGE:
      return { ...state, newInput: { ...state.newInput, address: action.data } };
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      return state;
  }
}
