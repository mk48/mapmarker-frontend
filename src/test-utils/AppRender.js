import React, { useReducer } from "react";

// testing lib
import { render } from "@testing-library/react";

// State
import reducer from "./../State/reducer";
import { initialState } from "./../State/initialState";
import DispatchContext from "./../State/DispatchContext";
import StateContext from "./../State/StateContext";

function AppRender({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AppRender, ...options });

// override render method
export { customRender as render };
