import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.div<{ src?: string, hideOnSmallScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
  background-image: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')});
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

    @media (max-width: 1100px) {
      ${({ hideOnSmallScreen }) => hideOnSmallScreen && `background: none;`}
    }
`

export const Container = styled.div`
  display: flex;
  margin: 0 26px;
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
export const Feature = styled.div`
  padding: 10rem 26px 0;
  flex-direction: column;
  align-items: normal;
  min-width: 430px;
  width: 50%;
  height: 430px;
`

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 900px) {
    font-size: 33px;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 20px;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 900px) {
    font-size: 16px;
  }
`

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 30px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
  
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
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
export const Group = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`

export const TextLink = styled.button`
  background: none;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: font-weight .33s ease;

  &:hover {
  font-weight: 600;
}
`

export const Picture = styled.img`
    width: 40px;
    border-radius: 4px;
`

export const Dropdown = styled.div`
  position: absolute;
  top: 15px;
  right: 52px;
  display: none;
  background-color: black;
  padding: 10px;
  width: 130px;
  height: 100px;
 
  img {
    width: 20px;
    height: 20px;
    margin: 0 4px;
  }

  @media (max-width: 1000px) {
    right: 42px;
  }
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  cursor: pointer;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    }
`
