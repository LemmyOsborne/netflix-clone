import React from "react";
import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { AccordionContainer } from "../containers/Accordion";
import { HeaderContainer } from "../containers/Header";
import { AccordionForm, Feature } from "../components";


export const Home: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <AccordionForm direction="column">
                        <AccordionForm.Text>Ready to watch? Enter your email to create or restart your membership.</AccordionForm.Text>
                        <AccordionForm.InputGroup>
                            <AccordionForm.Input placeholder="Email address" />
                            <AccordionForm.Button>Get Started</AccordionForm.Button>
                        </AccordionForm.InputGroup>
                    </AccordionForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
