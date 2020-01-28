import Head from 'next/head'

import { Container, CssBaseline } from '@material-ui/core'

import Nav from '../components/nav'


 const Layout = ({ children, title = 'Pasa Job' }) => (
  <div>
    <CssBaseline />
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Container>
        <Nav />
        {children}
        <footer>{'I`m here to stay'}</footer>
    </Container>
    
  </div>
)

export default Layout