import React from "react";

//State
import reducer from "./../State/reducer";
import { initialState, markerState } from "./../State/initialState";
import {
  ADD_NEW_BUTTON_CLICKED,
  ADDRESS_CHANGE,
  ADD_NEW_CANCEL_BUTTON_CLICKED,
  SAVE_BUTTON_CLICKED
} from "./../State/ActionTypes";

// testing library
//import { render, fireEvent, waitForElement } from "@testing-library/react";

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

    expect(updatedState.showAddButton).toBeFalsy();
    expect(updatedState.markers.length).toBe(totalMarkers + 1);
  });

  it("Changing address on textbox should update the state", () => {
    const addressToType = "new add";
    const action = {
      type: ADDRESS_CHANGE,
      data: { id: 1, text: addressToType }
    };
    const updatedState = reducer(state, action);

    expect(updatedState.markers[0].addressEdit).toBe(addressToType);
  });

  it("Cancel button on add-new should remove the temp-created item", () => {
    const action = {
      type: ADD_NEW_CANCEL_BUTTON_CLICKED,
      data: { id: 1 }
    };
    const updatedState = reducer(state, action);

    expect(updatedState.markers.length).toBe(0);
    expect(updatedState.showAddButton).toBeTruthy();
  });

  it("Save button on add-new should save the typed item", () => {
    const action = {
      type: SAVE_BUTTON_CLICKED,
      data: { id: 1 }
    };
    const updatedState = reducer(state, action);

    expect(updatedState.markers[0].mode).toBe("view");
    expect(updatedState.showAddButton).toBeTruthy();
  });
});
