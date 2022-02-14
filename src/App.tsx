import React from 'react';
import { Jumbotron } from './components/Jumbotron/Jumbotron';
import jumbotronData from "./fixtures/jumbotron.json";


const App: React.FC = () => {
  return (
    <Jumbotron.Container>
      {jumbotronData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>Hello</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

export default App;
