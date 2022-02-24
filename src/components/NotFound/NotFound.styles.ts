import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/misc/404.png");
  background-attachment: fixed;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
`;

export const Content = styled.div`
  background-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0.2) 45%,
    rgba(0, 0, 0, 0.1) 55%,
    rgba(0, 0, 0, 0) 70%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 67px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
  color: inherit;
  margin-bottom: 35px;
  user-select: none;
`;

export const Subtitle = styled.p`
  margin: 0;
  text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
  color: inherit;
  font-size: 25px;
  max-width: 700px;
  text-align: center;
  margin-bottom: 25px;
  user-select: none;
`;

export const Button = styled(Link)`
  background-color: white;
  padding: 13px 30px;
  border-radius: 4px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.p`
  color: inhetit;
  letter-spacing: 1.5px;
  font-size: 30px;
  border-left: 2px solid #e50914;
  padding: 0 15px;
  line-height: 60px;
  margin: 25px;

  span {
    color: white;
    font-size: 30px;
    font-weight: 600;
  }
`;

export const BottomText = styled.span`
  color: rgba(229, 229, 229, 0.57);
  position: fixed;
  right: 80px;
  bottom: 40px;
  text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  strong {
    color: white;
    opacity: 0.7;
    margin-left: 5px;
  }
`;
