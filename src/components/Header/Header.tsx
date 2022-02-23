import React, { SetStateAction, useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo, Text, Menu, Feature, Title, Dropdown, Group, Picture, TextLink, Search, SearchIcon, SearchIpnut } from "./Header.styles";

interface IHeaderComposition extends React.FC<IHeader> {
    Frame: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Feature: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    ButtonLink: React.FC<LinkProps>
    Logo: React.FC<{ to: string, src: string, alt: string }>
    Menu: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Search: React.FC<React.HTMLAttributes<HTMLDivElement> & { searchTerm: string, setSearchTerm: React.Dispatch<SetStateAction<string>> }>
    Dropdown: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Group: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Picture: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & { photoURL: string }>
    TextLink: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }>
}

interface IHeader {
    hideOnSmallScreen?: boolean
    src?: string
    bg?: boolean
    children: any
}

export const Header: IHeaderComposition = ({ src, bg, children, ...restProps }) => {

    //If the bg prop is true, the header component will display the image as a background otherwise it will be black

    return bg ? (
        <Background src={src}  {...restProps}>
            {children}
        </Background>
    ) : children
}


Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setIsSearchActive(isSearchActive => !isSearchActive)}>
                <img src="images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchIpnut
                active={isSearchActive}
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
            />
        </Search>
    )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Picture = function HeaderPicture({ photoURL, ...restProps }) {
    const isFacebookPhoto = photoURL.split(".").includes("facebook")
    return isFacebookPhoto ? (
        <Picture src={photoURL} {...restProps} />
    ) : (
        <Picture src={`/images/users/${photoURL}.png`} {...restProps}/>
    )
}

Header.TextLink = function HeaderTextLink({ active, children, ...restProps }) {
    return <TextLink active={active} {...restProps}>{children}</TextLink>
}

