import { url } from "inspector";
import styled from "styled-components";

export const Group = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 35px;
    box-sizing: border-box;
`

export const Row = styled.div`
    display: flex;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: white;
    font-size: 35px;
    font-weight: 500;
`
export const Meta = styled.div`
    display: none;
    background-color: rgba(0, 0, 0, 0.56);
    padding: 10px;
    position: absolute;
    bottom: 0px;
    color: white;
    user-select: none;
`

export const Subtitle = styled.p`
    font-size: 12px;
    font-weight: 600;
    display: none;
    margin-top: 0;
    margin-bottom: 0;
`
export const Text = styled.p`
    font-size: 10px;
    display: none;
    margin-bottom: 0;
    margin-top: 5px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    transition: transform .33s ease;
    position: relative;
    cursor: pointer;

    &:hover {
        transform: scale(1.3);
        z-index: 99;

        ${Meta}, ${Subtitle}, ${Text} {
        display: block;
    }
    }
`

export const Image = styled.img`
    border-radius: 4px;
    width: 100%;
    height: auto;
    max-width: 305px;
    padding: 0;
    margin: 0;
` 

export const Feature = styled.div<{src?: string}>`
    background-image: ${({ src }) => `url(${src});`};
    background-size: contain;
    /* position: relative; */
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
`

export const FeatureTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: white;
`

export const FeatureText = styled.p<{ fontWeight?: string }>`
    font-size: 16px;
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
`

export const Maturity = styled.div<{rating: string}>`
    background-color: ${({ rating }) => parseInt(rating) < 18 ? `green` : `red`};
    text-align: center;
    width: 20px;
    padding: 5px;
    border-radius: 15px;
    text-shadow: rgb(0 0 0 / 20%) 2px 2px 4px;
    font-size: 12px;
    font-weight: 600;
    color: white;
`

export const FeatureClose = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    img {
        width: 30px;
        filter: brightness(0) invert(1)
    }
`

export const Content = styled.div`
    
`