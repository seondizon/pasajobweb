import React, { useEffect } from 'react';
import { getCookies, parseCookies } from 'nookies'
import _ from 'lodash'
import { useRouter } from 'next/router'

const privateRoute = Component => props => {

    const router = useRouter()
    const { authToken } = parseCookies();

    useEffect(() => {
        _.isUndefined( authToken ) && router.push("/login")
    }, []);

  return _.isUndefined( authToken )? <></> : <Component {...props } />
};

export default privateRoute;