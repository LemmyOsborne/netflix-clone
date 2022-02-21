import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the <Loading />", () => {
    const { container, getByTestId, getByAltText } = render(<Loading src="/images/2.png" data-testid="loading" />)
    expect(getByTestId("loading")).toBeTruthy()
    expect(getByAltText("Profile image")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the <Loading.ReleaseBody />", () => {
    const { container } = render(<Loading.ReleaseBody data-testid="loading" />)
    expect(container.firstChild).toMatchSnapshot()
  })
}) 