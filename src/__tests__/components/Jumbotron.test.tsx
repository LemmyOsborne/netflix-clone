import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumbotronData from "../../fixtures/jumbotron.json";


describe("<Jumbotron/>", () => {
    it("renders <Jumbotron/>", () => {
        const { container, getByText, getByTestId, getByAltText } = render(
            <Jumbotron.Container>
                {jumbotronData.map(item => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                            {item.title === "Watch everywhere."
                                ? <Jumbotron.Video src={item.video} autoPlay playsInline muted loop secondVideo="true" />
                                : <Jumbotron.Video src={item.video} autoPlay playsInline muted loop />
                            }
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>
        )

        expect(getByText("Enjoy on your TV.")).toBeTruthy()
        expect(getByText("Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.")).toBeTruthy()
        expect(getByAltText("Watch TV with Netflix")).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })
})