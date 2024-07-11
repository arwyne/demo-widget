import React from "react";
import { screen, render } from "@testing-library/react";

import { DemoComponent } from "./demo-component";

describe("DemoComponent", () => {
  it("should render the component", () => {
    render(<DemoComponent message="World" />);

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
