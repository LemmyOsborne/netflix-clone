import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles/>", () => {
    it("renders <Profiles/>", () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}}>
                        <Profiles.ProfileImage src={`/images/users/2.png`} alt="Profile Image" data-testid="profile-image" />
                        <Profiles.Name>Lemmy</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
                <Profiles.Button>Manage Profiles</Profiles.Button>
            </Profiles>
        )

        expect(getByText("Who's watching?")).toBeTruthy()
        expect(getByText("Lemmy")).toBeTruthy()
        expect(getByText("Manage Profiles")).toBeTruthy()
        expect(getByTestId("profile-image")).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })
})