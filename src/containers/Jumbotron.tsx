import React from 'react';
import { Jumbotron } from '../components';
import jumbotronData from "../fixtures/jumbotron.json";



export const JumbotronContainer: React.FC = (): JSX.Element => {
  return (
    <Jumbotron.Container>
      {jumbotronData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            {item.alt === "Watch on mobile" &&
              <Jumbotron.AnimationContainer>
                <img src="/images/misc/boxshot.png" alt="Stranger things" />
                <Jumbotron.AnimationText>
                  <h2>Stranger Things</h2>
                  <p>Downloading...</p>
                </Jumbotron.AnimationText>
              </Jumbotron.AnimationContainer>
            }
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
}

