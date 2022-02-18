import { User } from 'firebase/auth';
import React from 'react';
import { SelectProfile } from "../components";
import { IProfile } from './Browse';

export const SelectProfileContainer: React.FC<{user: IProfile, setProfile: React.Dispatch<React.SetStateAction<IProfile>>}> = ({ user, setProfile }) => {
  return (
    <SelectProfile>
        <SelectProfile.Title>Who's watching?</SelectProfile.Title>
        <SelectProfile.List>
            <SelectProfile.User onClick={() => setProfile({displayName: user?.displayName, photoURL: user?.photoURL})}>
                <SelectProfile.ProfileImage src={user?.photoURL} alt="Profile Image"/>
                <SelectProfile.Name>{user?.displayName}</SelectProfile.Name>
            </SelectProfile.User>
        </SelectProfile.List>
        <SelectProfile.Button>Manage Profiles</SelectProfile.Button>
    </SelectProfile>
  )
}
