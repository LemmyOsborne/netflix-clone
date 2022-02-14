import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 0;
    max-width: 1000px;
    margin: auto;
    color: #757575;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 14px;
`

export const Title = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
`

export const BottomText = styled.p`
    margin-bottom: 40px;
    font-size: 14px;
`

