import React from "react";
import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { AccordionContainer } from "../containers/Accordion";

export const Home: React.FC = () => {
    return (
        <>
        <JumbotronContainer/>
        <AccordionContainer />
        <FooterContainer/>
        </>
    )
}
