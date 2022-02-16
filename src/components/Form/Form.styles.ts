import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 6rem;

    @media (max-width: 700px) {
        background-color: black;
    }
`

export const Inner = styled.form`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .75);
    max-width: 314px;
    padding: 60px 68px 160px;
    border-radius: 4px;

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    color: white;
`
export const InputWrapper = styled.div`
    position: relative;
    width: 100%; 
    height: 50px; 
    margin-bottom: 40px;
`

export const Input = styled.input`
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 16px 20px 0;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #333;
    width: 100%;
`

export const Label = styled.label`
    position: absolute;
    top: 35%;
    left: 20px;
    color: #8c8c8c;
    cursor: text;
    transition: font .1s ease, top .1s ease, transform .1s ease;

    &.isToggle {
        font-size: 12px;
        top: 25%;
        transform: translateY(-50%)
    }
`

export const Error = styled.div`
    color: #e87c03;
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 13px;
`

export const Button = styled.button`
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin: 0 0 12px;
    padding: 16px;
    background: #e50914;
    width: 100%;
    cursor: pointer;
`

export const RememberMe = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 13px;
    color: #b3b3b3;

    span {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const RememberMeCheckbox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    +label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        margin-bottom: 15px;
        cursor: pointer;

        ::before {
            content: '';
            display: inline-block;
            border-radius: 2px;
            border: 0;
            height: 16px;
            left: -20px;
            width: 16px;
            flex-shrink: 0;
            flex-grow: 0;
            margin-right: 5px;
            background-size: 90%;
            background-color: #fff;
        }
    }

    &:checked+label::before {
            background-color: #737373;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("/images/icons/check.png");
        }
`

export const FacebookLogin = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 13px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 6%;
        margin-right: 10px;
        cursor: pointer;
    }
`

export const SignUpLink = styled(Link)`
    color: white;
    text-decoration: none;
    display: block;
    margin: 15px 0;
    cursor: pointer;

    span {
        color: #737373;
        margin-right: 5px;
        cursor: auto;
    }
`

export const CaptchaText = styled.div`
    font-size: 13px;
    color: #8c8c8c;

    span {
        color: #0071eb;
        cursor: pointer;
        margin-left: 5px;

        &:hover {
            text-decoration: underline;
        }
    }
`

