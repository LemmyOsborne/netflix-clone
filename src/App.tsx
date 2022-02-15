import React from 'react';
import { JumbotronContainer } from './containers/Jumbotron';
import { FooterContainer } from './containers/Footer';
import { AccordionContainer } from "./containers/Accordion";


const App: React.FC = () => {
  return (
    <>
    <JumbotronContainer/>
    <AccordionContainer/>
    <FooterContainer/>
    </>
  )
}

export default App;
