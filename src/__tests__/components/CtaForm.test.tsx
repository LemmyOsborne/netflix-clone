import React from "react";
import { CtaForm } from "../../components";
import { render } from "@testing-library/react";

jest.mock("react-router-dom")

describe("<CtaFotm/>", () => {
    it("render <CtaForm/>", () => {
        const { container, getByText, getByPlaceholderText, getByTestId } = render(
            <CtaForm direction="row">
                <CtaForm.InputGroup data-testid="input-group">
                    <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership.</CtaForm.Text>
                    <CtaForm.Input placeholder="Email address" />
                    <CtaForm.Button>Try it now</CtaForm.Button>
                </CtaForm.InputGroup>
            </CtaForm>
        )

        expect(getByText("Ready to watch? Enter your email to create or restart your membership.")).toBeTruthy()
        expect(getByText("Try it now")).toBeTruthy()
        expect(getByPlaceholderText("Email address")).toBeTruthy()
        expect(getByTestId("input-group")).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })
})