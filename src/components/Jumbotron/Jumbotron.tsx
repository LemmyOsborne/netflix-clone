import React, { ReactNode } from "react";
import { Inner, Container } from "./Jumbotron.styles";

export interface Props {
    direction?: string;
    children: ReactNode;
    restProps?: object;
}

interface JumbotronComposition {
    Container: React.FC<Props>
}

export const Jumbotron: React.FC<Props> & JumbotronComposition = ({ children, direction, ...restProps }) => {
    return (
        <Inner direction={direction} {...restProps}>
            {children}
        </Inner>
    )
}


Jumbotron.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}