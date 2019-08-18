import React from "react";

//State
import reducer from "./../State/reducer";
import initialState from "./../State/initialState";
import { ADD_NEW_BUTTON_CLICKED } from "./../State/ActionTypes";

// testing library
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Testing all state related methods", () => {
  it("Clicking add new button update the state", () => {
    const state = { ...initialState };
    const action = { type: ADD_NEW_BUTTON_CLICKED };
    const updatedState = reducer(state, action);

    expect(updatedState.isAddMode).toBe(true);
  });
});
