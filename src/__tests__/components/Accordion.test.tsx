import React from "react";
import { Accordion } from "../../components";
import { render, fireEvent } from "@testing-library/react";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordion/>", () => {
    it("renders <Accordion/> populated with data", () => {
        const { container, getByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {faqsData.map(item => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
        )

        expect(getByText("What is Netflix?")).toBeTruthy()
        expect(getByText("How much does Netflix cost?")).toBeTruthy()
        expect(getByText("Where can I watch?")).toBeTruthy()
        expect(getByText("How do I cancel?")).toBeTruthy()
        expect(getByText("What can I watch on Netflix?")).toBeTruthy()
        expect(getByText("Is Netflix good for kids?")).toBeTruthy()
        expect(getByText("Frequently Asked Questions")).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })

    it("opens and close <Accordion/>", () => {
        const { container, getByText, queryByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {faqsData.map(item => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
        )

        const whatIsNetflixBodyText =
            "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy()
        //@ts-ignore
        fireEvent.click(queryByText('What is Netflix?'))
        expect(queryByText(whatIsNetflixBodyText)).toBeTruthy()

        //@ts-ignore
        fireEvent.click(queryByText('What is Netflix?'))
        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy()
        expect(container.firstChild).toMatchSnapshot()
    })
})