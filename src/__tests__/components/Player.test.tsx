import React from "react";
import { Player } from "../../components";
import { render, fireEvent } from "@testing-library/react";

describe("<Player/>", () => {
    it("renders the <Player/> with Witcher trailer video", () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
            <Player.Video src="/videos/trailers/witcher.mp4" />
            <Player.Button>Play</Player.Button>
        </Player>
        )

        expect(queryByTestId("player")).toBeFalsy()
        fireEvent.click(getByText("Play"))
        expect(queryByTestId("player")).toBeTruthy()
        //@ts-ignore
        fireEvent.click(queryByTestId("player"))
        expect(queryByTestId("player")).toBeFalsy()
        expect(container.firstChild).toMatchSnapshot()
    })
})