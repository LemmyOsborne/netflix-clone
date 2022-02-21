import React, { HTMLAttributes } from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './Loading.styles';

interface ILoading extends React.FC<{src: string | undefined | null}> {
    ReleaseBody: React.FC<HTMLAttributes<HTMLBodyElement>>
}

export const Loading: ILoading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} alt="Profile image" />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}