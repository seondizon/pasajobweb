import React, { useEffect } from 'react';
import { getCookies } from 'nookies'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { parseCookies } from '../../Lib/parseCookies'

const privateRoute = ( Component ) => {

  const wrapComp =  ( props ) => {
    return <Component {...props } />
  };

  /* get initial props of the child */
  wrapComp.getInitialProps = async (ctx) => {

    const cookies = parseCookies(ctx.req);

    // TODO: fetch auth token everytime and compare to cookies

    if( _.isUndefined( cookies.authToken ) ){

      ctx.res.writeHead(303, {
        Location: '/login'
      })

      ctx.res.end();
      
    }

    const pageProps = Component.getInitialProps && 
      (await Component.getInitialProps(ctx))
    // Return props to child.
    
    return { ...pageProps }

  }
  
  return wrapComp

}

export default privateRoute;
