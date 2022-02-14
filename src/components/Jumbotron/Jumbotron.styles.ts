import styled from "styled-components";
import { Props } from "./Jumbotron";

export const Inner = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Container = styled.div``