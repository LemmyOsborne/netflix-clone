import React from 'react';
import { Profiles } from "../components";
import { IProfile } from '../types/types';

interface IProfilesContainer {
  user: IProfile
  setProfile: React.Dispatch<React.SetStateAction<IProfile>>
}

export const ProfilesContainer: React.FC<IProfilesContainer> = ({ user, setProfile }) => {
  return (
    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={() => setProfile({ displayName: user?.displayName, photoURL: user?.photoURL })}>
          <Profiles.ProfileImage src={`/images/users/${user.photoURL}.png`} alt="Profile Image" />
          <Profiles.Name>{user?.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
      <Profiles.Button>Manage Profiles</Profiles.Button>
    </Profiles>
  )
}
