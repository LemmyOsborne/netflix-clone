import React from 'react'
import { NotFound } from '../components'
import { HeaderContainer } from '../containers/Header'

const NotFoundPage = () => {
    return (
        <>
            <HeaderContainer bg={false} showSignInButton={false} smallLogo />
            <NotFound />
        </>
    )
}

export default NotFoundPage