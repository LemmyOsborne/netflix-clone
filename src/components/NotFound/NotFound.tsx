import React from 'react'
import { Container, Title, Subtitle, Button, Text, Content, BottomText } from "./NotFound.styles"
import * as ROUTES from "../../constants/routes"

export const NotFound = () => {
    return (
        <Container>
            <Content>
                <Title>Lost your way?</Title>
                <Subtitle>Sorry, we can't find that page. You'll find loads to explore on the home page.</Subtitle>
                <Button to={ROUTES.HOME}>Netflix Home</Button>
                <Text>Error Code <span>NSES-404</span></Text>
                <BottomText>From  <strong>Lost in space</strong></BottomText>
            </Content>
        </Container>
    )
}
