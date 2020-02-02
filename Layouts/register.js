import Head from 'next/head'
import { Layout } from 'antd';
import './register.scss'
const { Content } = Layout;

 const RegisterLayout = ({ children, title = 'Pasa Job', pageId="registerLogin" }) => (
  <div id={pageId}>
    <img className="background-logo" src="/images/logo.png" />
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Content className="registerLayout" >
        {children}
      </Content>
    </Layout>
  </div>
)

export default RegisterLayout