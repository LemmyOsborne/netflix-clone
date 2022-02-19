import React from "react";
import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { AccordionContainer } from "../containers/Accordion";
import { HeaderContainer } from "../containers/Header";
import { CtaForm, Feature } from "../components";


export const Home: React.FC = () => {
    return (
        <>
            <HeaderContainer bg={true}>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <CtaForm direction="column">
                        <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership.</CtaForm.Text>
                        <CtaForm.InputGroup>
                            <CtaForm.Input placeholder="Email address" />
                            <CtaForm.Button>Get Started</CtaForm.Button>
                        </CtaForm.InputGroup>
                    </CtaForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
