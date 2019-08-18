import React from "react";

//State
import reducer from "./../State/reducer";
import { initialState, markerState } from "./../State/initialState";
import { ADD_NEW_BUTTON_CLICKED, ADDRESS_CHANGE } from "./../State/ActionTypes";

// testing library
import { render, fireEvent, waitForElement } from "@testing-library/react";

// initial state for testing
const marker = { ...markerState };
const state = {
  ...initialState,
  markersId: [1],
  markers: [{ ...marker, id: 1 }]
};

describe("Testing all state related methods", () => {
  it("Clicking add new button update the state", () => {
    const totalMarkers = state.markers.length;

    const action = { type: ADD_NEW_BUTTON_CLICKED };
    const updatedState = reducer(state, action);

    expect(updatedState.isAddMode).toBeTruthy();
    expect(updatedState.markers.length).toBe(totalMarkers + 1);
  });

  it("Changing address on textbox should update the state", () => {
    const addressToType = "new add";
    const action = {
      type: ADDRESS_CHANGE,
      data: { id: 1, text: addressToType }
    };
    const updatedState = reducer(state, action);

    expect(updatedState.markers[0].address).toBe(addressToType);
  });
});
