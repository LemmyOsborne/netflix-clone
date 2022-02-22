import styled from "styled-components";

export const Inner = styled.div<{direction: string}>`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    width: 100%;
    margin: auto;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`

export const Container = styled.div`
    @media (max-width: 1200px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`

export const Pane = styled.div`
    width: 50%;
    position: relative;
    min-height: 100px;
    justify-self: center;

    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 45px;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`

export const Image = styled.img`
    max-width: 100%;
    position: relative;
    z-index: 2
`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54%;
    position: absolute;
    top: 21%;
    left: 13%;

    &.secondVideo {
        width: 100%;
        height: 100%;
        max-width: 63%;
        max-height: 47%;
        position: absolute;
        top: 34%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        object-fit: contain;
        display: inline-block;
        vertical-align: baseline;
    }
`

export const AnimationContainer = styled.div`
    margin: -8% 0 -4% -15%;
    min-width: 330px;
    display: flex;
    align-items: center;
    width: 60%;
    position: absolute;
    right: 40%;
    bottom: 12%;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 2em 0 #000;
    border-radius: 0.75em;
    z-index: 99;
    background-color: #000;
    padding: 10px 15px;

    img {
        height: 5em;
        margin-right: 20px;
    }

    &::after {
        width: 3em;
        height: 3em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url("/images/misc/downloading.gif") center center no-repeat;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100%;
        background-size: 100%;
        content: '';
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -moz-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: absolute;
        right: 5%;
    }

    @media (max-width: 1200px) {
        right: 24%;
        width: 50%;
    }

    @media (max-width: 800px) {
        display: none;
    }
`

export const AnimationText = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 85px;
    white-space: nowrap;

    h2 {
        color: white;
        margin: 0;
        font-size: 16px;
    }

    p {
        color: #0071eb;
        font-size: 14px;
        margin: 0;
    }
`