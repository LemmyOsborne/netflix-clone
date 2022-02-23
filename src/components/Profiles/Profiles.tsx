import React from 'react';
import { Container, Title, List, User, ProfileImage, Name, Button } from "./Profiles.styles"


interface IProfiles extends React.FC {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    List: React.FC<React.HTMLAttributes<HTMLUListElement>>
    User: React.FC<React.HTMLAttributes<HTMLLIElement>>
    ProfileImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & {photoURL: string | undefined}>
    Name: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
}

export const Profiles: IProfiles = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <User {...restProps}>{children}</User>
}

Profiles.ProfileImage = function ProfilesProfileImage({ photoURL, ...restProps }) {
    const isFacebookPhoto = photoURL?.split(".").includes("facebook")

    return isFacebookPhoto ? (
    <ProfileImage src={photoURL} {...restProps}/>
    ) : (
        <ProfileImage src={`/images/users/${photoURL}.png`} {...restProps}/>
    )
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

Profiles.Button = function ProfilesButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}