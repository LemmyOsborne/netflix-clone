import React, { ReactElement } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useFirebaseAuth } from '../components/hooks/useFirebaseAuth';
import * as ROUTES from "../constants/routes";

interface IRequireAuth {
    children: JSX.Element
}

export const RequireAuth: React.FC<IRequireAuth> = ({ children }): JSX.Element => {
    const location = useLocation()
    const user = useFirebaseAuth()

    return user ? children : <Navigate to={ROUTES.SIGNIN} state={{ from: location }} />
}

export const WithRedirectAuthUser: React.FC<IRequireAuth> = ({ children }): JSX.Element => {
    const user = useFirebaseAuth()

    return !user ? children : <Navigate to={ROUTES.BROWSE} />
}
