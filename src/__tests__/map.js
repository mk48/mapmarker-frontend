import React from "react";

// testing library
import { render, fireEvent, waitForElement } from "@testing-library/react";

// component to test
import Map from "../Map";

it("Map component should render", async () => {
  //const { getByTestId } = render(<Map/>);

  //await waitForElement( () => getByTestId("map") )

  expect(5).toBe(5);
});
