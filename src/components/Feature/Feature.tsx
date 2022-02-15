import React from 'react';
import { Container, Title, SubTitle } from './Feature..styles';

interface FeatureComposition {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    SubTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
}

export const Feature: React.FC & FeatureComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};