import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div<{ src?: string }>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), 
  url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  
  @media (max-width: 700px) {
        &.changeBackground {
          background: black;
        }
    }
`

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  
  a {
    display: flex;
  }
  
  @media (max-width: 1000px) {
    margin: 0 20px;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: #e50914;
  width: 84px;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: #f40612;
  }
`

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  
  @media (max-width: 1100px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Logo = styled.img`
  height: 45px;
  width: 167px;
  margin-right: 40px;
  
  @media (max-width: 700px) {
    height: 20px;
    width: 75px;
  }
`