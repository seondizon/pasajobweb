import Head from '../Components/head'
import { Layout } from 'antd';

const { Content } = Layout;

 const RegisterLayout = ({ children, title = 'Pasa Job', pageId="registerPage" }) => (
  <div id={pageId} className="register-layout">
    <img className="background-logo" src="/images/logo.png" />
    <Head title={title} />
    <Layout>
      <Content >
        {children}
      </Content>
    </Layout>
  </div>
)

export default RegisterLayout