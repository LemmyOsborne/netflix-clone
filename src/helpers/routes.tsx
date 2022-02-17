import React from 'react';
import { Navigate, RouteProps, useLocation } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useFirebaseAuth } from './firebaseAuth';

interface IRequireAuth {
    children: JSX.Element
}

export const RequireAuth: React.FC<IRequireAuth & RouteProps> = ({ children }): JSX.Element => {
    const location = useLocation()
    const user = useFirebaseAuth()


    return user ? children : <Navigate to={ROUTES.SIGNIN} state={{ from: location }} />
}
