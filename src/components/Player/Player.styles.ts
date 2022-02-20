import styled from "styled-components";

export const Container = styled.div``

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
`

export const Inner = styled.div`
    width: 900px;
    height: auto;

    video {
        width: 100%;
        height: 100%;
    }
`

export const Button = styled.button`
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
    border: none;
    outline: none;
    
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`