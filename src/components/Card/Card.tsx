import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IContent } from '../../types/types';
import { Container, Row, Image, Group, Title, Item, Meta, Subtitle, Text, Feature, FeatureText, FeatureTitle, Maturity, FeatureClose, Content, MaturityWrapper } from "./Card.styles"


interface CardComposition extends React.FC<{ children: ReactNode }> {
    Group: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Row: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Item: React.FC<React.HTMLAttributes<HTMLDivElement> & { item: IContent }>
    Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
    Meta: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Subtitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    Feature: React.FC<React.HTMLAttributes<HTMLDivElement> & { category: string }>
}

interface IFeatureContext {
    showFeature: boolean
    setShowFeature: React.Dispatch<React.SetStateAction<boolean>>
    itemFeature: IContent
    setItemFeature: React.Dispatch<React.SetStateAction<IContent>>
}

const FeatureContext = createContext({} as IFeatureContext)

export const Card: CardComposition = ({ children }) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({} as IContent)

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Row = function CardRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setItemFeature, setShowFeature } = useContext(FeatureContext)

    return (
        <Item
            onClick={() => {
                setShowFeature(true);
                setItemFeature(item);
            }}
            {...restProps}
        >
            {children}
        </Item>
    )
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image  {...restProps} />
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {
    const { itemFeature, showFeature, setShowFeature } = useContext(FeatureContext)

    return showFeature ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <MaturityWrapper>
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < "12" ? "PG" : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="600">{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</FeatureText>
                </MaturityWrapper>
                {children}
            </Content>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>
        </Feature>
    ) : null
}

