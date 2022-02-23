import React, { HTMLAttributes } from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './Loading.styles';

interface ILoading extends React.FC<{photoURL: string | undefined | null}> {
    ReleaseBody: React.FC<HTMLAttributes<HTMLBodyElement>>
}

export const Loading: ILoading = ({ photoURL, ...restProps }) => {
  const isFacebookPhoto = photoURL?.split(".").includes("facebook")

  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={isFacebookPhoto ? `${photoURL}` : `/images/users/${photoURL}.png`} alt="Profile image" />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}