import Head from 'next/head'
import Nav from '../Components/nav'

const Layout = ({ children, title = 'Pasa Job' }) => (
  <div>
    
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div>
        <Nav />
        {children}
        <footer>{'I`m here to stay'}</footer>
    </div>
    
  </div>
)

export default Layout