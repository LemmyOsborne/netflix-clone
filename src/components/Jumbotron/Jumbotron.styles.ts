import styled from "styled-components";

export const Inner = styled.div<{direction: string}>`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`

export const Pane = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 1000px) {
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
    height: auto;
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