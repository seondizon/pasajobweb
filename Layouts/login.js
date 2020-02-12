import Head from '../Components/head'
import { Layout } from 'antd';
import { PageContext } from '../utils/context';
import { useContext, useState } from 'react';
import Loader from '../Components/global-loader';

const { Content } = Layout;

const LoginLayout = ({ children, title = 'Pasa Job', pageId="registerPage" }) => {

  const { pageState } = useContext(PageContext)

  return (
      <div id={pageId} className="login-layout">
        <Head title={title} />
        <Layout>
          <Content >
            {children}
          </Content>
        </Layout>
        <Loader active={ pageState.loading } />
      </div>
  )

}

export default LoginLayout