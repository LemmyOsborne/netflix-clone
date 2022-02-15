import React from 'react';
import { Accordion } from "../components";
import { AccordionForm } from "../components";
import faqsData from "../fixtures/faqs.json";


export const AccordionContainer: React.FC = () => {
    return (
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

            <AccordionForm direction="row">
                <AccordionForm.Input placeholder="Email address" />
                <AccordionForm.Button>Try it now</AccordionForm.Button>
                <AccordionForm.Text>Ready to watch? Enter your email to create or restart your membership.</AccordionForm.Text>
            </AccordionForm>
        </Accordion>
    )
}
