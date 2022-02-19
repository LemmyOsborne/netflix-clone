import React from 'react';
import { Accordion } from "../components";
import { CtaForm } from "../components";
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

            <CtaForm direction="row">
                <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership.</CtaForm.Text>
                <CtaForm.Input placeholder="Email address" />
                <CtaForm.Button>Try it now</CtaForm.Button>
            </CtaForm>
        </Accordion>
    )
}
