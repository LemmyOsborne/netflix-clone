import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 5rem;
    margin: auto;
    max-width: 80%;
`

export const Title = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;
    width: 100%;
    font-weight: 500;
`

export const List = styled.ul`
    padding: 0;
    margin: 0 0 40px;
    display: flex;
    flex-direction: row;
`

export const ProfileImage = styled.img`
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    border: 3px solid black;
`

export const Name = styled.p`
    color: #808080;
    max-width: 80px;
    margin: 2px 0;
    text-overflow: ellipsis;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`

export const User = styled.li`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 120px;

    &:hover > ${ProfileImage} {
        border: 3px solid white;
    }
    
    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }
    
    &:last-of-type {
        margin-right: 0;
    }
`

export const Button = styled.button`
    background-color: transparent;
    color: #808080;
    border: 1px solid gray;
    padding: 8px 20px;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: white;
    }
`