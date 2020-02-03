import Head from '../Components/head'
import Nav from '../Components/nav'

const Layout = ({ children, title = 'Pasa Job' }) => (
  <div>
    
    <Head title={title} />
    
    <div>
        <Nav />
        {children}
        <footer>{'I`m here to stay'}</footer>
    </div>
    
  </div>
)

export default Layout