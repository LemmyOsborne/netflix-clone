import React from 'react';
import { Container, Title, List, User, ProfileImage, Name, Button } from "./SelectProfile.styles"


interface ISelecetProfile extends React.FC {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    List: React.FC<React.HTMLAttributes<HTMLUListElement>>
    User: React.FC<React.HTMLAttributes<HTMLLIElement>>
    ProfileImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement> | {src?: string | null}>
    Name: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
}

export const SelectProfile: ISelecetProfile = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

SelectProfile.Title = function SelectProfileTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

SelectProfile.List = function SelectProfileList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

SelectProfile.User = function SelectProfileUser({ children, ...restProps }) {
    return <User {...restProps}>{children}</User>
}

SelectProfile.ProfileImage = function SelectProfileProfileImage({src, ...restProps }) {
    return <ProfileImage {...restProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} />
}

SelectProfile.Name = function SelectProfileName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

SelectProfile.Button = function SelectProfileButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}