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
      ${({ hideOnSmallScreen }) => hideOnSmallScreen && `background-image: none;`}
    }
`

export const Container = styled.div`
  display: flex;
  padding: 0 35px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    padding: 0 15px;
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
  padding: 10rem 35px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  height: 430px;

  @media (max-width: 900px) {
    width: 70%;
  }
`

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 800px) {
    font-size: 33px;
  }
  
  @media (max-width: 600px) {
    font-size: 25px;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 20px;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 800px) {
    font-size: 16px;
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

export const TextLink = styled.button<{active?: boolean}>`
  background: none;
  color: white;
  border: none;
  font-weight: ${({ active }) => active ? 600 : 500};
  transition: font-weight .33s ease;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`
export const Group = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`

export const Picture = styled.img`
    width: 40px;
    border-radius: 4px;
`

export const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  right: 55px;
  display: none;
  background-color: black;
  padding: 10px;
  width: 130px;
  height: 100px;
  cursor: default;
 
  ${Picture} {
    cursor: default;
    width: 30px;
    height: 30px;
    margin: 0 4px;
  }

  @media (max-width: 1000px) {
    right: 30px;
  }
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    }
`

export const Search = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }
`

export const SearchIpnut = styled.input<{active: boolean}>`
  border: none;
  outline: none;
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s, background-color 0.3s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  width: ${({ active }) => active ? "200px" : "0px"};
  padding: ${({ active }) => active ? "0 10px" : "0px"};
  margin-right: ${({ active }) => active ? "10px" : "0px"};
  opacity: ${({ active }) => active ? "1" : "0"};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const SearchIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  outline: none;

  img {
    filter: brightness(0) invert(1);
    width: 20px;
  }
`