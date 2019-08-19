import React from "react";

// testing library
import { fireEvent, waitForElement } from "@testing-library/react";
import { render } from "../test-utils/AppRender";

// component to test
import List from "../MarkerForm/List";

it("List should render", async () => {
  const { getByTestId } = render(<List />);

  await waitForElement(() => getByTestId("list"));

  expect(5).toBe(5);
});
